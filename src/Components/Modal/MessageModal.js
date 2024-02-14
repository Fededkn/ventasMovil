import React from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

const MessageModal = ({ isVisible, onClose, message }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ marginBottom: 20, fontSize: 24 }}>{message}</Text>
          <Pressable onPress={onClose}>
            <Text style={{ color: 'blue', fontSize: 18 }}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
