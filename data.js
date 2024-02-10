const products = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 699.99,
      "image" : [
        {
          "alt" : "Vans",
          "url": "https://i.ebayimg.com/images/g/zYkAAOSwVexkBnn0/s-l400.jpg"
        },
      ],
      "categories": [
        {
          "categoryId": 101,
          "categoryName": "Electronics"
        },
        {
          "categoryId": 102,
          "categoryName": "Smartphones"
        }
      ],
      "details": {
        "description": "Latest model with high-end specs.",
        "specs": [
          {
            "specName": "Screen",
            "specValue": "6.5 inch OLED"
          },
          {
            "specName": "Battery",
            "specValue": "4500 mAh"
          }
        ]
      }
    },
    {
      "id": 2,
      "name": "Laptop",
      "price": 1200.00,
      "image" : [
        {
          "alt" : "Nike",
          "url": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200"
        }
      ],
      "categories": [
        {
          "categoryId": 101,
          "categoryName": "Electronics"
        },
        {
          "categoryId": 104,
          "categoryName": "Computers"
        }
      ],
      "details": {
        "description": "Powerful laptop suitable for both work and play.",
        "specs": [
          {
            "specName": "CPU",
            "specValue": "Intel i7"
          },
          {
            "specName": "RAM",
            "specValue": "16GB"
          }
        ]
      }
    },
    {
        "id": 3,
        "name": "Smartphone",
        "price": 1490.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://icenter-store.ru/upload/resize_cache/webp/iblock/87b/563_563_2/pjfx8a6lgfh3rhufaui1zxlsrupj2ifh.webp"
          }
        ],
        "categories": [
            {
              "categoryId": 101,
              "categoryName": "Electronics"
            },
            {
              "categoryId": 102,
              "categoryName": "Smartphones"
            }
          ],
          "details": {
            "description": "Latest model with high-end specs.",
            "specs": [
              {
                "specName": "Screen",
                "specValue": "6.5 inch OLED"
              },
              {
                "specName": "Battery",
                "specValue": "4500 mAh"
              }
          ]
        }
      },
      {
        "id": 4,
        "name": "Smartphone",
        "price": 890.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://images.samsung.com/is/image/samsung/assets/kz_ru/smartphones/galaxy-z-flip4/overview/galaxy-z-flip4_highlights_kv.jpg?$ORIGIN_JPG"
          }
        ],
        "categories": [
            {
              "categoryId": 101,
              "categoryName": "Electronics"
            },
            {
              "categoryId": 102,
              "categoryName": "Smartphones"
            }
          ],
          "details": {
            "description": "Latest model with high-end specs.",
            "specs": [
              {
                "specName": "Screen",
                "specValue": "6.5 inch OLED"
              },
              {
                "specName": "Battery",
                "specValue": "4500 mAh"
              }
          ]
        }
      },
      {
        "id": 5,
        "name": "Laptop",
        "price": 1300.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://p.turbosquid.com/ts-thumb/Er/pVXRH9/f5/render9/jpg/1698836482/600x600/fit_q87/884035449414a1d9d55583f603f6eeba72f2b135/render9.jpg"
          }
        ],
        "categories": [
          {
            "categoryId": 101,
            "categoryName": "Electronics"
          },
          {
            "categoryId": 104,
            "categoryName": "Computers"
          }
        ],
        "details": {
          "description": "Powerful laptop suitable for both work and play.",
          "specs": [
            {
              "specName": "CPU",
              "specValue": "Intel i7"
            },
            {
              "specName": "RAM",
              "specValue": "16GB"
            }
          ]
        }
      },
      {
        "id": 6,
        "name": "Smartphone",
        "price": 990.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://fdn.gsmarena.com/imgroot/news/24/01/samsung-galaxy-s24-ultra-what-to-expect/-1200x900m/gsmarena_001.jpg"
          }
        ],
        "categories": [
            {
              "categoryId": 101,
              "categoryName": "Electronics"
            },
            {
              "categoryId": 102,
              "categoryName": "Smartphones"
            }
          ],
          "details": {
            "description": "Latest model with high-end specs.",
            "specs": [
              {
                "specName": "Screen",
                "specValue": "6.5 inch OLED"
              },
              {
                "specName": "Battery",
                "specValue": "4500 mAh"
              }
          ]
        }
      },
      {
        "id": 7,
        "name": "Laptop",
        "price": 1250.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/769449c09c06d8d5c8070af13b1756a0.jpg"
          }
        ],
        "categories": [
          {
            "categoryId": 101,
            "categoryName": "Electronics"
          },
          {
            "categoryId": 104,
            "categoryName": "Computers"
          }
        ],
        "details": {
          "description": "Powerful laptop suitable for both work and play.",
          "specs": [
            {
              "specName": "CPU",
              "specValue": "Intel i7"
            },
            {
              "specName": "RAM",
              "specValue": "16GB"
            }
          ]
        }
      },
      {
        "id": 8,
        "name": "Laptop",
        "price": 1100.00,
        "image" : [
          {
            "alt" : "Nike",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP0zLJUyhIPmYnmOlks_Z4U1ERSMY_v29vw&usqp=CAU"
          }
        ],
        "categories": [
          {
            "categoryId": 101,
            "categoryName": "Electronics"
          },
          {
            "categoryId": 104,
            "categoryName": "Computers"
          }
        ],
        "details": {
          "description": "Powerful laptop suitable for both work and play.",
          "specs": [
            {
              "specName": "CPU",
              "specValue": "Intel i7"
            },
            {
              "specName": "RAM",
              "specValue": "16GB"
            }
          ]
        }
      }
  ]

export default products;