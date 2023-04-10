import React from 'react';
import {View, KeyboardAvoidingView, Text, TextInput} from "react-native"
import {styles} from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from "../../components";

export function Login(){
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
            <Text style={styles.title}>Login</Text>
            <View style={styles.formRow}>
            <MaterialIcons name="email" size={24} color="#E32D59" />
            <TextInput
            placeholder='e-mail'
            placeholderTextColor={colors.third}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
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
            />
            </View>
            <ComponentButtonInterface title="Entrar" type="primary" onPressI={()=>(console.log("Login"))}/>
            <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={()=>(console.log("Login"))}/>
            </KeyboardAvoidingView>
        </View>
    )
}
