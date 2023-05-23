import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

type AppProps = {
  visible: boolean;
  onRequestClose: any;
  value: string;
  onChangeText: any;
  onPress: any;
  text: string;
};

export default function ModalCom({
  visible,
  onRequestClose,
  value,
  onChangeText,
  onPress,
  text,
}: AppProps) {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentBody}>
          <TextInput
            style={styles.modalInput}
            value={value}
            onChangeText={onChangeText}
          />
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.modalText}>{text} </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentBody: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalInput: {
    width: Dimensions.get('screen').width - 50 - 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#393646',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
  },
  modalText: {
    fontSize: 15,
    marginTop: 5,
    color: '#000',
    fontWeight: '500',
    backgroundColor: '#0E8388',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    width: (Dimensions.get('screen').width - 50 - 50) / 2,
    textAlign: 'center',
  },
});
