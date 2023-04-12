import React from 'react';
import {View, StyleSheet, Modal, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';


const UploadScreen = ({progress=0,visible=false}) => {
    return (
        <Modal visible={visible}>

        <View style={styles.conatiner}>
              <Progress.Bar color={colors.primaryBlue} progress={progress} width={200}/> 
             {/* <Text>{progress*100}%</Text> */}
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    conatiner:{
      alignItems:"center",
      justifyContent:"center",
      flex:1
    }
})

export default UploadScreen;
