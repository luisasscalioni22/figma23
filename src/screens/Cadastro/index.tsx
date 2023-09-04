import React, { useEffect } from 'react';
import {useState} from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface, ComponentLoading } from '../../components';
import {loginTypes} from "../../navigations/login.navigation";
import { IRegister} from '../../services/data/User'
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
export interface IErrorApi {
    errors:{
        rule: string
        field: string
        message: string
    }[]
    
}
export function Cadastro({navigation}:loginTypes) {
    const [data,setData] = useState<IRegister>()
    const [isLoading,setIsLoading]= useState(true)
    async function handleRegister(){
        try{
            setIsLoading(true)
            if(data?.name && data.email && data .password){
                const response= await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!`)
                navigation.navigate('Login')
            }else{
                Alert.alert('Preencha todos os campos!')
            }
        }catch (error){
            console.log(error)
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if(errData) {
                for (const iterator of errData.errors){
                    message = `${message} ${iterator.message} \n`
                }
            }
            Alert.alert(message)
            setIsLoading(false)
        } finally {
            setIsLoading(false)

        }
    }
    function handleChange(item:IRegister){
        setData({...data,...item})
    }
    useEffect(()=> {
        setTimeout(() =>{
              setIsLoading(false)
        },1980)
    },[])

    return (
        <>
        {isLoading ? (
            <ComponentLoading />
        ) : (
            <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.formRow}>
                    <FontAwesome name="user" size={24} color="#E32D59" />
                    <TextInput
                        placeholder='Nome Completo'
                        placeholderTextColor={colors.third}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i)=> handleChange({name:i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Entypo name="email" size={24} color="#E32D59" />
                    <TextInput
                        placeholder='Nome de usuário'
                        placeholderTextColor={colors.third}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i)=> handleChange({email:i})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Ionicons name="md-key" size={24} color="#E32D59" />
                    <TextInput
                        placeholder='Senha'
                        placeholderTextColor={colors.third}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                        onChangeText={(i)=> handleChange({password:i})}
                    />
                </View>
                <ComponentButtonInterface title="Salvar" type="primary" onPressI={handleRegister} />
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={() =>(navigation.navigate("Login"))}/>
            </KeyboardAvoidingView>
        </View>            
        )}
        </>
    );
}