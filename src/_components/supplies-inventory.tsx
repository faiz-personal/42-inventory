import React from 'react';

interface Product {
    itemName: string;
    totalQuantity: number;
    supplier: string;
}

interface SuppliesTableProps {
    products: Product[];
}

const SuppliesTable: React.FC<SuppliesTableProps> = ({ products }) => {
    const getRowColor = (totalQuantity: number) => {
        if (totalQuantity < 500) {
            return 'bg-red-200 bg-opacity-60';
        } else if (totalQuantity > 1500) {
            return 'bg-green-200 bg-opacity-60';
        } else {
            return 'bg-yellow-200 bg-opacity-60';
        }
    };

    const formatQuantity = (quantity: number) => {
        if (quantity < 100) return "<100";
        if (quantity >= 100 && quantity <= 250) return "100-250";
        if (quantity > 250 && quantity <= 500) return "250-500";
        if (quantity > 500 && quantity <= 1000) return "500-1000";
        if (quantity > 1000 && quantity <= 1500) return "1000-1500";
        if (quantity > 1500 && quantity <= 2000) return "1500-2000";
        return "2000+";
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Item Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Supplier
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product, index) => (
                    <tr key={index} className={getRowColor(product.totalQuantity)}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.itemName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatQuantity(product.totalQuantity)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.supplier}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SuppliesTable;
