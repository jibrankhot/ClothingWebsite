import { IMenuItem } from "./menu-d-type";

// Desktop / Mega Menu
export const menu_data: IMenuItem[] = [
  // Men
  {
    id: 1,
    link: '/shop/men',
    title: 'Men',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Topwear',
        link: '/shop/men/topwear',
        dropdown_menus: [
          { title: 'T-Shirts', link: '/shop/men/t-shirts' },
          { title: 'Casual Shirts', link: '/shop/men/casual-shirts' },
          { title: 'Formal Shirts', link: '/shop/men/formal-shirts' },
          { title: 'Sweatshirts', link: '/shop/men/sweatshirts' },
          { title: 'Sweaters', link: '/shop/men/sweaters' },
          { title: 'Jackets', link: '/shop/men/jackets' },
          { title: 'Blazers & Coats', link: '/shop/men/blazers-coats' },
          { title: 'Suits', link: '/shop/men/suits' }
        ]
      },
      {
        id: 2,
        title: 'Bottomwear',
        link: '/shop/men/bottomwear',
        dropdown_menus: [
          { title: 'Jeans', link: '/shop/men/jeans' },
          { title: 'Casual Trousers', link: '/shop/men/casual-trousers' },
          { title: 'Formal Trousers', link: '/shop/men/formal-trousers' },
          { title: 'Shorts', link: '/shop/men/shorts' },
          { title: 'Track Pants & Joggers', link: '/shop/men/track-pants' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/men/footwear',
        dropdown_menus: [
          { title: 'Casual Shoes', link: '/shop/men/casual-shoes' },
          { title: 'Sports Shoes', link: '/shop/men/sports-shoes' },
          { title: 'Formal Shoes', link: '/shop/men/formal-shoes' },
          { title: 'Sneakers', link: '/shop/men/sneakers' },
          { title: 'Sandals & Floaters', link: '/shop/men/sandals-floaters' },
          { title: 'Flip Flops', link: '/shop/men/flip-flops' },
          { title: 'Socks', link: '/shop/men/socks' }
        ]
      },
      {
        id: 4,
        title: 'Sportswear',
        link: '/shop/men/sportswear',
        dropdown_menus: [
          { title: 'Track Pants & Shorts', link: '/shop/men/track-pants-shorts' },
          { title: 'T-Shirts', link: '/shop/men/sports-t-shirts' },
          { title: 'Jackets', link: '/shop/men/sports-jackets' }
        ]
      },
      {
        id: 5,
        title: 'Innerwear & Sleepwear',
        link: '/shop/men/innerwear-sleepwear',
        dropdown_menus: [
          { title: 'Briefs & Trunks', link: '/shop/men/briefs-trunks' },
          { title: 'Vests', link: '/shop/men/vests' },
          { title: 'Sleepwear & Lounge', link: '/shop/men/sleepwear-lounge' }
        ]
      },
    ]
  },

  // Women
  {
    id: 2,
    link: '/shop/women',
    title: 'Women',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Indian & Fusion Wear',
        link: '/shop/women/indian-fusion',
        dropdown_menus: [
          { title: 'Kurtas & Suits', link: '/shop/women/kurtas-suits' },
          { title: 'Kurtis, Tunics & Tops', link: '/shop/women/kurtis-tunics' },
          { title: 'Sarees', link: '/shop/women/sarees' },
          { title: 'Ethnic Wear', link: '/shop/women/ethnic-wear' },
          { title: 'Leggings, Salwars & Churidars', link: '/shop/women/leggings-salwars' },
          { title: 'Skirts & Palazzos', link: '/shop/women/skirts-palazzos' },
          { title: 'Dress Materials', link: '/shop/women/dress-materials' },
          { title: 'Lehenga Cholis', link: '/shop/women/lehenga-cholis' }
        ]
      },
      {
        id: 2,
        title: 'Western Wear',
        link: '/shop/women/western-wear',
        dropdown_menus: [
          { title: 'Dresses', link: '/shop/women/dresses' },
          { title: 'Tops', link: '/shop/women/tops' },
          { title: 'T-Shirts', link: '/shop/women/t-shirts' },
          { title: 'Jeans', link: '/shop/women/jeans' },
          { title: 'Trousers & Capris', link: '/shop/women/trousers-capris' },
          { title: 'Shorts & Skirts', link: '/shop/women/shorts-skirts' },
          { title: 'Sweaters & Sweatshirts', link: '/shop/women/sweaters-sweatshirts' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/women/footwear',
        dropdown_menus: [
          { title: 'Flats', link: '/shop/women/flats' },
          { title: 'Casual Shoes', link: '/shop/women/casual-shoes' },
          { title: 'Heels', link: '/shop/women/heels' },
          { title: 'Boots', link: '/shop/women/boots' },
          { title: 'Sports Shoes & Floaters', link: '/shop/women/sports-shoes-floaters' }
        ]
      },
      {
        id: 4,
        title: 'Lingerie & Sleepwear',
        link: '/shop/women/lingerie-sleepwear',
        dropdown_menus: [
          { title: 'Bra', link: '/shop/women/bra' },
          { title: 'Briefs & Panties', link: '/shop/women/briefs-panties' },
          { title: 'Sleepwear & Loungewear', link: '/shop/women/sleepwear-loungewear' }
        ]
      },
      {
        id: 5,
        title: 'Sports & Activewear',
        link: '/shop/women/sports-activewear',
        dropdown_menus: [
          { title: 'Track Pants & Shorts', link: '/shop/women/track-pants-shorts' },
          { title: 'T-Shirts', link: '/shop/women/sports-t-shirts' },
          { title: 'Jackets', link: '/shop/women/sports-jackets' }
        ]
      },
    ]
  },

  // Kids
  {
    id: 3,
    link: '/shop/kids',
    title: 'Kids',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Boys Clothing',
        link: '/shop/kids/boys-clothing',
        dropdown_menus: [
          { title: 'T-Shirts', link: '/shop/kids/boys-t-shirts' },
          { title: 'Shirts', link: '/shop/kids/boys-shirts' },
          { title: 'Jeans', link: '/shop/kids/boys-jeans' },
          { title: 'Shorts', link: '/shop/kids/boys-shorts' },
          { title: 'Track Pants', link: '/shop/kids/boys-track-pants' }
        ]
      },
      {
        id: 2,
        title: 'Girls Clothing',
        link: '/shop/kids/girls-clothing',
        dropdown_menus: [
          { title: 'Dresses', link: '/shop/kids/girls-dresses' },
          { title: 'Tops', link: '/shop/kids/girls-tops' },
          { title: 'T-Shirts', link: '/shop/kids/girls-t-shirts' },
          { title: 'Jeans', link: '/shop/kids/girls-jeans' },
          { title: 'Skirts & Shorts', link: '/shop/kids/girls-skirts-shorts' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/kids/footwear',
        dropdown_menus: [
          { title: 'Casual Shoes', link: '/shop/kids/casual-shoes' },
          { title: 'Sports Shoes', link: '/shop/kids/sports-shoes' },
          { title: 'Sandals', link: '/shop/kids/sandals' },
          { title: 'Flip Flops', link: '/shop/kids/flip-flops' }
        ]
      },
      {
        id: 4,
        title: 'Accessories',
        link: '/shop/kids/accessories',
        dropdown_menus: [
          { title: 'Bags & Backpacks', link: '/shop/kids/bags-backpacks' },
          { title: 'Hats & Caps', link: '/shop/kids/hats-caps' },
          { title: 'Watches', link: '/shop/kids/watches' }
        ]
      },
      {
        id: 5,
        title: 'Shop by Age',
        link: '/shop/kids/age',
        dropdown_menus: [
          { title: '0-6 months', link: '/shop/kids/age/0-6' },
          { title: '6-12 months', link: '/shop/kids/age/6-12' },
          { title: '1-2 years', link: '/shop/kids/age/1-2' },
          { title: '2-4 years', link: '/shop/kids/age/2-4' },
          { title: '4-6 years', link: '/shop/kids/age/4-6' },
          { title: '6-8 years', link: '/shop/kids/age/6-8' }
        ]
      }
    ]
  },

  // Beauty
  {
    id: 4,
    link: '/shop/beauty',
    title: 'Beauty',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Makeup',
        link: '/shop/beauty/makeup',
        dropdown_menus: [
          { title: 'Lipstick', link: '/shop/beauty/lipstick' },
          { title: 'Foundation', link: '/shop/beauty/foundation' },
          { title: 'Eyeliner', link: '/shop/beauty/eyeliner' },
          { title: 'Nail Polish', link: '/shop/beauty/nail-polish' }
        ]
      },
      {
        id: 2,
        title: 'Skincare',
        link: '/shop/beauty/skincare',
        dropdown_menus: [
          { title: 'Moisturizers', link: '/shop/beauty/moisturizers' },
          { title: 'Cleansers', link: '/shop/beauty/cleansers' },
          { title: 'Face Masks', link: '/shop/beauty/face-masks' }
        ]
      },
      {
        id: 3,
        title: 'Haircare',
        link: '/shop/beauty/haircare',
        dropdown_menus: [
          { title: 'Shampoo', link: '/shop/beauty/shampoo' },
          { title: 'Conditioner', link: '/shop/beauty/conditioner' },
          { title: 'Hair Oil', link: '/shop/beauty/hair-oil' }
        ]
      }
    ]
  },

  // Gen Z
  {
    id: 5,
    link: '/shop/genz',
    title: 'GenZ',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Trending',
        link: '/shop/genz/trending',
        dropdown_menus: [
          { title: 'Oversized Tees', link: '/shop/genz/oversized-tees' },
          { title: 'Cargo Pants', link: '/shop/genz/cargo-pants' },
          { title: 'Crop Tops', link: '/shop/genz/crop-tops' }
        ]
      },
      {
        id: 2,
        title: 'Streetwear',
        link: '/shop/genz/streetwear',
        dropdown_menus: [
          { title: 'Hoodies', link: '/shop/genz/hoodies' },
          { title: 'Sneakers', link: '/shop/genz/sneakers' },
          { title: 'Baggy Jeans', link: '/shop/genz/baggy-jeans' }
        ]
      },
      {
        id: 3,
        title: 'Accessories',
        link: '/shop/genz/accessories',
        dropdown_menus: [
          { title: 'Bucket Hats', link: '/shop/genz/bucket-hats' },
          { title: 'Chains', link: '/shop/genz/chains' },
          { title: 'Crossbody Bags', link: '/shop/genz/crossbody-bags' }
        ]
      }
    ]
  }
];
