import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Button, FormControl, Input, Modal, Popover} from 'native-base';

export default function ModalPopUpCom({modalVisible, setModalVisible}) {
  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
      avoidKeyboard
      justifyContent="flex-end"
      bottom="4"
      size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Forgot Password?</Modal.Header>
        <Modal.Body>
          Enter email address and we'll send a link to reset your password.
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button
            flex="1"
            onPress={() => {
              setModalVisible(false);
            }}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
