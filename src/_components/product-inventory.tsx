import React from 'react';

interface Product {
    itemName: string;
    totalQuantity: number;
    sQuantity: number;
    mQuantity: number;
    lQuantity: number;
    xlQuantity: number;
    xxlQuantity: number;
    rowColor?: 'red' | 'yellow' | 'green'; // Optional color property
}

interface ProductTableProps {
    products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    const getRowColor = (color?: 'red' | 'yellow' | 'green') => {
        switch (color) {
            case 'red':
                return 'bg-red-200 bg-opacity-60';
            case 'yellow':
                return 'bg-yellow-200 bg-opacity-60';
            case 'green':
                return 'bg-green-200 bg-opacity-60';
            default:
                return '';
        }
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
                        S
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        M
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        L
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        XL
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        XXL
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product, index) => (
                    <tr key={index} className={getRowColor(product.rowColor)}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.itemName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.totalQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.mQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.lQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.xlQuantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.xxlQuantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
