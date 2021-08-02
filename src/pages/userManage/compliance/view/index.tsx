import { Flex, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUser } from 'react-icons/fa';
import {
  RiFileUserLine,

  RiLockPasswordLine,
} from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Button } from '../../../../container/button';
import { Input } from '../../../../container/input/inputChakara';
import Spinner from '../../../../container/loadingSpinner/ndex';
import { useToast } from '../../../../hooks/toast';
import ApiService from '../../../../utils/services/Apiservice';

type updateFormData = {
  name: string;
  cpf: string;
  email: string;
  login: string;
  password: string;

}

export const ClientUserView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dataInital, setDataInital] = useState<updateFormData>();
  const [loading, setLoading] = useState(false);  // eslint-disable-line
  const [statusInput, setStatusInput] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titleButtonSubmitted, setTitleButtonSubmitted] = useState('Salvar');
  const { addToast } = useToast();

  const udpateComplianceFormSchema = Yup.object().shape({
    name: Yup.string().required('Nome completo é obrigatório').min(5, 'Deve conter no mínimo 5 caracteres'),
    cpf: Yup.string().required('CPF é obrigatório').min(11, 'CPF deve conter 11 caracteres').max(11, 'CPF deve conter 11 caracteres.'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
    login: Yup.string().required('Nome do usuário e obrigatório').min(5, 'Deve conter no mínimo 5 caracteres'),
    password: Yup.string().required('Senha e obrigatória').min(8, 'Deve conter no minimo 8 caracteres'),
  });

  const {
    control, register, handleSubmit, formState, setValue,
  } = useForm({
    resolver: yupResolver(udpateComplianceFormSchema),
  });

  const loadUsers = useCallback(async () => {
    setLoading(true);
    await ApiService.listUserComplianceById(id).then((result) => {
      try {
        if (result) {
          setDataInital(result);
          setLoading(false);
          setValue('name', result?.name);
        }
      } catch (e) {
        setDataInital(result.error);
        setLoading(false);
      }
    });
  }, [id]);

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
  }, [id]);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>

      <Flex align="center" justify="center" h="100vh">
        {loading && <Spinner />}
        <Flex justify="center" direction="column" align="center" w="100%">
          <Text
            color="#42427D"
            fontFamily="Inter"
            fontWeight="bold"
            fontSize="45px"

          >
            <p>{dataInital?.name}</p>
          </Text>
          <Flex
            direction="column"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              icon={FaRegUser}
              placeholder="Nome Completo *"
              isDisabled={statusInput}
              {...register('name')}
              error={formState?.errors?.name}
              defaultValue={dataInital?.name}
              color="#42427D"
              w="692px"
              h="63px"
              mt="10px"
            />
            <Input
              icon={RiFileUserLine}
              placeholder="CPF *"
              isDisabled={statusInput}
              {...register('cpf')}
              error={formState?.errors?.cpf}
              defaultValue={dataInital?.cpf}
              color="#42427D"
              w="692px"
              h="63px"
              mt="27px"

            />
            <Input
              icon={RiFileUserLine}
              placeholder="E-Mail *"
              isDisabled={statusInput}
              {...register('email')}
              error={formState?.errors?.email}
              defaultValue={dataInital?.email}
              color="#42427D"
              w="692px"
              h="63px"
              mt="27px"

            />
            <Flex
              mt="27px"
            >
              <Input
                icon={FaRegUser}
                placeholder="Usuário *"
                isDisabled={statusInput}
                {...register('login')}
                error={formState?.errors?.login}
                defaultValue={dataInital?.login}
                color="#42427D"
                w="321px"
                h="63px"
                mr="25px"

              />
              <Input
                isReadOnly
                type="password"
                icon={RiLockPasswordLine}
                placeholder="Senha *"
                isDisabled={statusInput}
                {...register('password')}
                error={formState?.errors?.password}
                defaultValue={dataInital?.password}
                color="#42427D"
                w="321px"
                h="63px"
              />
            </Flex>

            <Flex
              mt="50px"
              align="center"
              justify="center"

            >
              {statusInput
                ? (
                  <Button
                    type="button"
                    color="#42427D"
                    onClick={() => { setStatusInput(false); }}
                  >
                    Editar
                  </Button>
                )
                : (
                  <>
                    <Button
                      type="button"
                      color="#EB3F3F"
                      onClick={() => { setStatusInput(true); }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      color="#1AD822"
                      type="submit"
                      isLoading={formState?.isSubmitting}
                    >
                      {titleButtonSubmitted}
                    </Button>
                  </>
                )}

            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
