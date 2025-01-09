/*
import itemService from "../services/itemService";

export const itemController = {
    createItem: async (req, res) => {
        try {
            const result = await itemService.addItem(req.body);
            res.status(201).json({
                message: 'Item created successfully',
                item: result
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getItem: async (req, res) => {
        try {
            const item = await itemService.findItem(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({
                message: 'Item retrieved successfully',
                item: item
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateItem: async (req, res) => {
        try {
            const updatedItem = await itemService.modifyItem(req.params.id, req.body);
            if (!updatedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({
                message: 'Item updated successfully',
                item: updatedItem
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteItem: async (req, res) => {
        try {
            const deletedItem = await itemService.removeItem(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(204).send({
                message: 'Item deleted successfully',
                item: deletedItem
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    allItem : async(req, res) => {
        try {
            const items = await itemService.allItem();
            res.status(200).json({
                message: 'Items retrieved successfully',
                items: items
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
*/