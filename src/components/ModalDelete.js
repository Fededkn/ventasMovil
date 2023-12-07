import {Modal, View, Button, Text, StyleSheet} from "react-native"

const ModalDelete = ({product,visible,onModal,onDelete}) => {

    return  <Modal 
                visible={visible}
            >
                <View>
                    <Text>Está seguro que desea eliminar?</Text>
                    <Text>{product.title}</Text>
                    <Button title="Confirmo" onPress={onDelete} />
                    <Button title="Cerrar" onPress={() =>onModal(false)}/>
                </View>
            </Modal>
}
const styles = StyleSheet.create({

})

export default ModalDelete