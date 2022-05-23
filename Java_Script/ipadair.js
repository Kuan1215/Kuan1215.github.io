let productArray=[
    {
        productName:'ipad',
        baseImg:'ipad.jpg',
        basePrice:30000,
        specArray: [ //Specification
            {
                title: "機型",
                key: 'model',
                options: [
                    { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                    { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
                ],
                choosed: null,
                changePrice:true,
                changeImg:true,

            },
            {
                title: "外觀",
                key: 'color',
                options: [
                    { data: '#777', description: '太空灰色', },
                    { data: '#ddd', description: '銀色', },
                    { data: '#faa', description: '玫瑰金色', },
                    { data: '#0f0', description: '綠色', },
                ],
                choosed: null,
                changePrice:true,
                changeImg:true,
            },
            {
                title: '儲存裝置',
                key: 'storage',
                options: [
                    { data: '128GB', extraPrice: 0, },
                    { data: '256GB', extraPrice: 1000, },
                    { data: '512GB', extraPrice: 2000, },
                    { data: '1TB', extraPrice: 4000, },
                ],
                choosed: null,
                changePrice:true,
                changeImg:true,
            },
            {
                title: '連線能力',
                key: 'network',
                options: [
                    { data: 'Wi-Fi', extraPrice: 0, },
                    { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
                ],
                choosed: null,
                changePrice:true,
                changeImg:true,
            },
        ]
    }
]