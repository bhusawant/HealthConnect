import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../Assets/Products/1.png'
import img2 from '../../Assets/Products/2.png'
import img3 from '../../Assets/Products/3.png'
import img4 from '../../Assets/Products/4.png'
import './AllProduct.css'
const AllProduct = () => {
    const products = [
        {
            "ProductId": 1,
            "ProductName": "Product 1",
            "ProductDescription": "Introducing the HealthPro™ VersaTech - Your All-Purpose Healthcare Solution. Are you in search of a versatile, state-of-the-art healthcare device that adapts to your specific needs? Look no further than the HealthPro™ VersaTech. This multi-functional, innovative equipment is designed to cater to various healthcare applications, making it the ideal addition to any medical facility.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 80,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Medhaj Sarang",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-10-17",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Bhuvan",
                    "Email": "bhuvansawant@gmail.com",
                    "Rating": 1,
                    "Date": "2023-10-10",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Aryan Singh",
                    "Email": "singharyan@gmail.com",
                    "Rating": 4,
                    "Date": "2023-10-01",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Product 2",
            "ProductDescription": "Are you in search of a versatile, state-of-the-art healthcare device that adapts to your specific needs? Look no further than the HealthPro™ VersaTech. This multi-functional, innovative equipment is designed to cater to various healthcare applications, making it the ideal addition to any medical facility.",
            "ProductImage": [
                {
                    id: 1,
                    image: img2
                },
                {
                    id: 2,
                    image: img1
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 90,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Medhaj Sarang",
                    "Email": "sarangmedhaj@gmail.com",
                    "Rating": 5,
                    "Date": "2023-08-10",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Bhuvan",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-08-01",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Medhaj Sarang",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-08-01",
                    "Review": "I recently had the privilege of using the HealthPro™ VersaTech in my healthcare practice, and I must say, it is a true game-changer. This innovative equipment, shrouded in mystery, lived up to its promise of adaptability.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Product 3",
            "ProductDescription": "Are you in search of a versatile, state-of-the-art healthcare device that adapts to your specific needs? Look no further than the HealthPro™ VersaTech. This multi-functional, innovative equipment is designed to cater to various healthcare applications, making it the ideal addition to any medical facility.",
            "ProductImage": [
                {
                    id: 1,
                    image: img3
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 70,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 1,
            "ProductName": "Product 1",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 80,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Product 2",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img2
                },
                {
                    id: 2,
                    image: img1
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 90,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Product 3",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img3
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 70,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        }
    ]
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products.map((item,index) => {
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct