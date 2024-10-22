import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

const OrderShipModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View>
        <Text>Order Ship Modal</Text>
        <Button title="确认出货" onPress={() => {/* 确认出货逻辑 */}} />
        <Button title="关闭" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default OrderShipModal;
