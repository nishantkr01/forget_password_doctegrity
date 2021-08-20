import React, {useState} from 'react';
import { StyleSheet, TextInput, Text,View,Image,TouchableOpacity,ActivityIndicator,Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';

import axios from 'axios';

function ForgotPassword() {

    const [email, onChangeEmail] = useState('');
    const [status1, setStatus] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [status2, setStatusElse] = useState('');

    const[activityLoader, setActivityLoader] = useState(false);

    const handleEdit = async (email) => {



        if(email!==''){

            setActivityLoader(true)
            const email1 = email.toLowerCase();
          
        
        axios.post(`https://next.doctegrity.net/auth/forgot-password`, {
            email: email1,
            
          })
          .then(res => {
              
              if(res.status===200)
              {
                setStatus("We sent an email to s@d.com with a link to get back into your account.");
                setLoading(true);
                setStatusElse('')
                setActivityLoader(false)
              }
              else{
                  setStatusElse("Email Doesnot Exist")
                  setLoading(false)
                  setActivityLoader(false)
              }
          })
          .catch(function (error) {
            setStatusElse("User with this email does not exist.")
            setLoading(false)
            setStatus('')
            setActivityLoader(false)

          });
        }else{
            alert('Please Enter Email Id')
        }
    }

    return(
        <View>
            <View style={{backgroundColor:'#2c41a9', height: 60, width: 60, top: 110, borderRadius: 50, left: '42%'}}>
            <Image 
                    style={{width:45, left:7}}
                    resizeMode={"contain"}
                    source={require('../assets/heartTop.png')}
                />
            </View>

            <View style={{top: 172, left:33}}>
                <Text style={{fontSize: 22, color: '#2c41a9'}}>WELCOME<Text style={{fontWeight: 'bold'}}>BACK</Text></Text>
            </View>

            <View style={{top: 190, left:33, width: 305}}>
                <Text style={{color:'#2c41a9', fontSize: 15}}>Enter your email, and we'll send you a link to get back into your account for<Text style={{fontWeight:'bold'}}>Doctegrity.</Text></Text>
            </View>

          
            {status1!==''&&isLoading==true?<View style={{top:220, left: 34, backgroundColor:'#d6f3e9', width: 300, height:60,}}><Text style={{top: 20, left: 25, top: 13, width: 200, color:'#20655d'}}>{status1}</Text></View>:<Text></Text>}
            
           


            {status2!==''&&isLoading==false?<View style={{top:220, left: 34, backgroundColor:'#fde1e1', width: 300, height:60}}><Text style={{top: 20, left: 25, top: 21.5, width: 200, color:'#823c3c'}}>{status2}</Text></View>:<Text></Text>}



            <View style={{marginTop: 240, left: 33,}}>
                <Text style={{color:'#2c41a9', fontSize: 14, fontWeight: 'bold'}}>Email</Text>
            </View>

            <View style={{left:32, width:300,height:40, top:10, backgroundColor:'#e8f0fe',}}>
            <Feather style={{zIndex:1, left:10, top: 10}} name="mail" size={17} color="#becfed" />

            <TextInput
                value={email}
                keyboardType="email-address"
                style={styles.input}
                onChangeText={onChangeEmail}   
            />
            </View>


            <TouchableOpacity onPress={e => { handleEdit(email) }} style={{backgroundColor:'#556EE6', height:40, width:300,left:33, alignItems:'center', top:30, borderRadius: 4}}>
            
            {activityLoader==true?<View style={{top:10}}><ActivityIndicator color="white" /></View>:<Text style={{color:'#fff', top:10, fontWeight: 'bold'}}> Reset</Text>}</TouchableOpacity>

            <View style={{ top: 100, alignItems:"center"}}>
                <Text style={{color: '#2c41a9', fontSize: 17}}>Go back to login</Text>
                <Text style={{marginTop: 20, color: '#2c41a9',fontSize:17}}>Copyright © Doctegrity</Text>
            </View> 
        </View>
    )
}

export default ForgotPassword


//css
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderWidth:1,
      borderColor: 'black',
      borderWidth: 0,
      left:12,
      top:-32,
      zIndex: 1,
    },
  });
