import React, {useState, useEffect} from 'react';

import {formatMoney} from '../../utils/utils.js';
import Header from '../../components/Header';
import List from '../../components/List';
import Input from '../../components/Input';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Error from '../../components/Error';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const InvestimentDetail = ({props, route, navigation}) => {
  const {investimento} = route.params;
  const [actions, setActions] = useState([]);
  const [actionsErrors, setActionsErrors] = useState({});
  const [currentInputsValues, setCurrentInputsValues] = useState({});
  const [totalAvailable, setTotalAvailable] = useState(0);
  const [totalRescued, setTotalRescued] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [finalButtonText, setFinalButtonText] = useState('');
  const [finalModalTitle, setFinalModalTitle] = useState('');
  const [finalModalSubTitle, setFinalModalSubTitle] = useState('');
  const [conclude, setConclude] = useState(false);

  useEffect(() => {
    setActions([]);
    setTotalAvailable(investimento.saldoTotalDisponivel);
    investimento.acoes.map(acao => {
      setActions(item => [
        ...item,
        {
          id: acao.id,
          name: acao.nome,
          value: ((acao.percentual / 100) * totalAvailable).toFixed(2),
          formatedValue: `R$ ${formatMoney(
            (acao.percentual / 100) * totalAvailable,
          )}`,
        },
      ]);

      setCurrentInputsValues(item => ({
        ...item,
        [acao.id]: 0,
      }));
    });
  }, [investimento.acoes, investimento.saldoTotalDisponivel, totalAvailable]);

  const changeValue = (action, value) => {
    value = value ? parseFloat(value) : 0;
    if (parseFloat(value) > action.value && !actionsErrors[action.id]) {
      setActionsErrors(errors => ({
        ...errors,
        [action.id]: {
          error: 'Valor não pode ser maior que ' + action.formatedValue,
          finalError: `Valor invalido na ação: ${action.name}, seu valor máximo disponível é R$ ${action.formatedValue}.\n`,
        },
      }));
    } else if (parseFloat(value) <= action.value && actionsErrors[action.id]) {
      if (delete actionsErrors[action.id]) {
        setActionsErrors(actionsErrors);
      }
    }

    currentInputsValues[action.id] = value;
    setCurrentInputsValues(currentInputsValues);
  };

  const inputBlur = () => {
    const arrayObj = Object.values(currentInputsValues);
    let total = 0;
    arrayObj.map(item => {
      total = total + parseFloat(item);
    });

    setTotalRescued(total);
  };

  const confirmRescue = () => {
    let textButton = 'OK';
    let textTitle = 'Atenção!';
    let textSubtitle = '';

    const arrayObj = Object.values(actionsErrors);
    let inputsErrors = '';
    arrayObj.map(item => {
      inputsErrors += item.finalError + '\n';
    });

    if (totalRescued === 0) {
      setConclude(false);
      textSubtitle =
        'Por favor, preencha o "Valor a resgatar" de pelo menos uma Ação antes de continuar.';
    } else if (totalRescued > totalAvailable) {
      setConclude(false);
      textSubtitle =
        'O Valor total a resgatar é maior que o Saldo total disponível!';
    } else if (inputsErrors) {
      setConclude(false);
      textSubtitle = inputsErrors;
    } else {
      setConclude(true);
      textButton = 'NOVO RESGATE';
      textTitle = 'RESGATE EFETUADO!';
      textSubtitle =
        'O valor solicitado estará em sua conta em até 5 dias úteis!';
    }
    setFinalButtonText(textButton);
    setFinalModalTitle(textTitle);
    setFinalModalSubTitle(textSubtitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const finish = () => {
    closeModal();
    if (conclude) {
      navigation.popToTop();
    }
  };

  const HeaderList = () => {
    return (
      <>
        <Header
          title="DADOS DO INVESTIMENTO"
          size="16px"
          titleColor="#757575"
          align="flex-start"
          bgColor="#f4f4f4"
          borderBottom={false}
          rightTitleColor
        />
        <Section
          height="40px"
          title="Nome"
          rightContent={investimento.nome}
          colorRight="#757575"
          borderBottom={true}
        />
        <Section
          height="40px"
          title="Saldo total disponível"
          rightContent={`R$ ${formatMoney(totalAvailable)}`}
          colorRight="#757575"
          borderBottom={true}
          disabled={investimento.indicadorCarencia === 'S'}
        />
        <Header
          title="RESGATE DO SEU JEITO"
          size="16px"
          titleColor="#757575"
          align="flex-start"
          bgColor="#f4f4f4"
          borderBottom={false}
        />
      </>
    );
  };

  const FooterList = () => {
    return (
      <>
        <Section
          height="40px"
          title="Valor total a resgatar"
          rightContent={`R$ ${formatMoney(totalRescued)}`}
          colorRight="#757575"
          marginBottom="15px"
        />
        <Button onPress={confirmRescue} title="CONFIRMAR RESGATE" />
      </>
    );
  };

  return (
    <>
      <Header title="Resgate" bgColor="#005aa5" borderBottom={true} />

      <Modal
        visible={showModal}
        onRequestClose={closeModal}
        title={finalModalTitle}
        subTitle={finalModalSubTitle}>
        <Button onPress={finish} title={finalButtonText} />
      </Modal>

      <List header={<HeaderList />} footer={<FooterList />}>
        {actions.length > 0 &&
          actions.map(action => {
            return (
              <Card key={action.id} marginBottom="15px">
                <Section
                  height="40px"
                  title="Ação"
                  rightContent={action.name}
                  colorRight="#757575"
                  marginBottom="1px"
                />
                <Section
                  height="40px"
                  title="Saldo acumulado"
                  rightContent={action.formatedValue}
                  colorRight="#757575"
                  marginBottom="1px"
                />
                <Section>
                  <Input
                    onChangeText={value => {
                      changeValue(action, value);
                    }}
                    onBlur={inputBlur}
                    label="Valor a resgatar"
                  />
                </Section>
                <Section>
                  <Error
                    error={
                      actionsErrors[action.id] && actionsErrors[action.id].error
                        ? actionsErrors[action.id].error
                        : null
                    }
                  />
                </Section>
              </Card>
            );
          })}
      </List>
    </>
  );
};

export default InvestimentDetail;
