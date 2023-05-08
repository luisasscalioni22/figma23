import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';
import {loginTypes} from "../../navigations/login.navigation";


export function Cadastro({navigation}:loginTypes) {
    return (
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
                    />
                </View>
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
                        <FontAwesome name="phone" size={24} color="#E32D59" />
                        <TextInput
                            placeholder='Telefone'
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
                <ComponentButtonInterface title="Salvar" type="primary" onPressI={() =>(navigation.navigate("Drawer"))} />
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={() =>(navigation.navigate("Login"))}/>
            </KeyboardAvoidingView>
        </View>
    )
}