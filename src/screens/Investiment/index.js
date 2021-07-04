import React, {useState, useEffect} from 'react';

import InvestmentsServices from '../../services/InvestmentsServices';

import Header from '../../components/Header';
import List from '../../components/List';
import Card from '../../components/Card';
import Section from '../../components/Section';
import TouchableCard from '../../components/TouchableCard';
import {formatMoney} from '../../utils/utils.js';

const Investiment = ({props, navigation}) => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageFetch, setMessageFetch] = useState(
    'Carregando investimentos...',
  );

  const getInvestments = async () => {
    try {
      const {status, data} = await InvestmentsServices.all();
      if (status === 200) {
        setInvestments(data.response.data.listaInvestimentos);
        setLoading(false);
      } else {
        setMessageFetch('Nenhum investimento encontrado.');
      }
    } catch (error) {
      setMessageFetch('Erro ao carregar os investimentos.');
    }
  };

  useEffect(() => {
    getInvestments();
  }, []);

  const navigateDetails = investimento => {
    navigation.navigate('InvestimentDetail', {
      investimento: investimento,
    });
  };

  const HeaderList = () => {
    return (
      <Header
        title="INVESTIMENTOS"
        size="16px"
        titleColor="#757575"
        rightTitle="R$"
        rightTitleColor="#757575"
        align="space-between"
        bgColor="#f4f4f4"
        borderBottom={false}
      />
    );
  };

  const Loading = () => {
    return (
      <Header
        title={messageFetch}
        size="18px"
        titleColor="#757575"
        align="center"
        bgColor="#f4f4f4"
        borderBottom={false}
      />
    );
  };

  return (
    <>
      <Header title="Resgate" bgColor="#005aa5" borderBottom={true} />
      {loading ? (
        <Loading />
      ) : (
        <List header={<HeaderList />}>
          {investments.map(investimento => {
            return (
              <Card key={investimento.nome}>
                <TouchableCard
                  disabled={investimento.indicadorCarencia === 'S'}
                  onPress={() => {
                    if (investimento.indicadorCarencia === 'N') {
                      navigateDetails(investimento);
                    }
                  }}>
                  <Section
                    height="80px"
                    title={investimento.nome}
                    subTitle={investimento.objetivo}
                    rightContent={formatMoney(
                      investimento.saldoTotalDisponivel,
                    )}
                    borderBottom={true}
                    disabled={investimento.indicadorCarencia === 'S'}
                  />
                </TouchableCard>
              </Card>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Investiment;
