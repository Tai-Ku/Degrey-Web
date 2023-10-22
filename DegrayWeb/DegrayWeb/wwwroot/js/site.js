function initApp() {
    var products = [
        {
            id: "1",
            name: "Degrey Balo Simili Nap Basic - SNAP",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/18ca778dd0ff454db4b84a0e90eee1f0_54c0ed1d67044baea728e3f9cd211286_large.jpeg",
            priceOld: 490000,
            priceCurrent: 440000,
            isAvailable: false,
        },
        {
            id: "2",
            name: "Degrey Medium Leather Basic Balo Kem - MLBBK",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/mlbbk_3__73448b41ad494ffb8b6e0e754a9833a9_large.png",
            priceOld: 380000 ,
            priceCurrent: 300000,
            isAvailable: false,
        },
        {
            id: "3",
            name: "Tee Degrey IsUs Đen - USDE",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/4789e6526fec43c2a1adeb0ed3e73c7c_31adb692a88d4dfcb79605b630a48995_large.jpeg",
            priceOld: 350000,
            priceCurrent: 2450000,
            isAvailable: false,
        },
        {
            id: "4",
            name: "Tee Degrey IsUs Kem - USK",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/18ca778dd0ff454db4b84a0e90eee1f0_54c0ed1d67044baea728e3f9cd211286_large.jpeg",
            priceOld: 350000,
            priceCurrent: 2450000,
            isAvailable: true,
        },
        {
            id: "5",
            name: "Degrey Leather ToteBook Xám - DLTX",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/img_0046_93622093b32242d3b579b83c48126135_large.jpeg",
            priceOld: 450000,
            priceCurrent: 350000,
            isAvailable: true,
        },
        {
            id: "6",
            name: "Degrey Leather ToteBook - DLT",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/49ccea8a-75dd-4c24-9ff4-250a798c386e_fe21153c6c8c4dafb3bb87a16ad29eae_large.jpeg",
            priceOld: 450000,
            priceCurrent: 350000,
            isAvailable: true,
        },
        {
            id: "7",
            name: "Degrey Leather ToteBook Kem - DLTK",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/nt5158_cstsry8i-1-1tid-hinh_nghieng_trai-0_8f31410d584e4ab9b6407e4efe9546ff_large.jpeg",
            priceOld: 450000,
            priceCurrent: 350000,
            isAvailable: true,
        },
        {
            id: "8",
            name: "Degrey.Theeight Quần Thể Thao Cam - QTTC",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/b0fd9930-cfe7-47cd-9758-95afdf3a1e42_67d1fd43dfd94c6ca78bb66b125d077a_large.jpeg",
            priceOld: 350000,
            priceCurrent: 195000,
            isAvailable: true,
        },
        {
            id: "9",
            name: "Degrey.Madmonks Tee Vietnam 84 Đỏ - DV84 Đỏ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/99bfe005-0615-49a9-a37a-22ecf05fa5c6_0957c01376994d6a81103ded3bfc62b2_large.jpeg",
            priceOld: 440000,
            priceCurrent: 249000,
            isAvailable: true,
        },
        {
            id: "10",
            name: "Degrey Jacket V White - DJVW",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/nta121_a7n5wy17-1-32db-hinh_mat_sau-0_90ae256e3c054b02b6d5c522508af2b2_large.jpeg",
            priceCurrent: 380000,
            isAvailable: true,
        },
        {
            id: "11",
            name: "Degrey Jacket V Black - DJVB",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/nta121_a7n5wy17-1-90uh-hinh_mat_sau-0_c3069eebf63c44b4a495b47ab0f91c22_large.jpeg",
            priceCurrent: 380000,
            isAvailable: false,
        },
        {
            id: "12",
            name: "Degrey Canvas Bag Kem - TCVK",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/nt5111_fmi192jb-1-g3l5-hinh_mat_sau-0_5f05c36d6efa4e99990b9a2542820a3c_large.jpeg",
            priceOld: 380000,
            priceCurrent: 280000,
            isAvailable: false,
        },
        {
            id: "13",
            name: " Áo khoác da Degrey.Madmonks Biker Jacket V2.0 - JBK 2.0 ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/efa0faf3-9eef-4e6d-94e2-c5621e95c5a6_924ea0da43b6450ea017ffac2919d22b_large.jpeg",
            priceCurrent: 1200000,
            isAvailable: false,
        },
        {
            id: "14",
            name: " Áo khoác da Degrey.Madmonks Biker Jacket V2.0 - JBK 2.0 ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/c98b41dc-def5-41d4-9254-800f22fe57d8_7d6667203fb840fa95f8b2da83e94cf2_large.jpeg",
            priceCurrent: 1200000,
            isAvailable: false,
        },
        {
            id: "15",
            name: " Trà Xoài Cam Sả - TXCS ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/c98b41dc-def5-41d4-9254-800f22fe57d8_7d6667203fb840fa95f8b2da83e94cf2_large.jpeg",
            priceCurrent: 90000,
            isAvailable: false,
        },
        {
            id: "16",
            name: " Xoài Mực - XM ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/ea486b2e-6555-4fdf-886e-c299a6e136fa_5607f4465f5249de94f9647c71656fbf_large.jpeg",
            priceCurrent: 120000,
            isAvailable: false,
        },
        {
            id: "17",
            name: "Túi Da Degrey Travel Leather Bag - TVB",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/83b62c9153358e6bd724_d942ae71d2ae4acca1ce7006fc7da522_large.jpg",
            priceOld: 1200000,
            priceCurrent: 900000,
            isAvailable: false,
        },
        {
            id: "18",
            name: " Degrey.Madmonks Áo Thun Gân Ba Lỗ - ABL",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/2283ebca-fff5-4c29-95a5-2ea8ffbe78d1_d34b2edadb674dafa68f813023afb5a5_large.jpeg",
            priceOld: 190000,
            priceCurrent: 280000,
            isAvailable: false,
        },
        {
            id: "19",
            name: " Degrey short cargo pants Kem - DSCPK ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/d64d0931-0447-4172-ac8d-1386fe4b18cd_2eb0b3c2b0eb4e90ae07b0ce084700e2_large.jpeg",
            priceCurrent: 250000,
            isAvailable: false,
        },
        {
            id: "20",
            name: " Degrey short cargo pants Đen - DSCPD ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/065c5c8a-6fac-4da9-bd70-c6ee2c17db3a_0a0e698ab01d428d865e8a659b2ab513_large.jpeg",
            priceCurrent: 250000,
            isAvailable: false,
        },
        {
            id: "21",
            name: " Degrey Mini Bag Drawstring - MBD ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/53199c00-d7bf-4a25-9788-12ca41e74789_020f45f84b1b4dc590a40f8454744e07_large.jpeg",
            priceOld: 280000,
            priceCurrent: 190000,
            isAvailable: false,
        },
        {
            id: "22",
            name: " Degrey Mini Bag Drawstring Silver - MBDS ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/nt5178_xq6wzrw4-1-bt8b-hinh_nghieng_trai-0_310fa939f3e64eb8807b13003f6b9a31_large.jpeg",
            priceOld: 280000,
            priceCurrent: 190000,
            isAvailable: false,
        },
        {
            id: "23",
            name: " Degrey.madmonks short Pant xám rêu - DMQR ",
            imageUrl:
                "https://product.hstatic.net/1000281824/product/3f0dfdd8-83d9-41fc-8bc2-ee28708a229b_5befa0d288b244f79ca4b777875b8e8f_large.jpeg",
            priceOld: 280000,
            priceCurrent: 190000,
            isAvailable: false,
        },
        // Thêm các sản phẩm khác vào mảng
    ];

    var productContainer = document.querySelector(".home-product .grid__row"); // Thay đổi selector này nếu cần

    products.forEach(function (product) {
        var productElement = document.createElement("div");
        productElement.className = "grid__column-2-4";
        productElement.innerHTML = `
                <a href="" class="home-product-item" data-id="${product.id}">
                    <div class="home-product-item__img" style="background-image: url(${product.imageUrl
            });"></div>
                    <h4 class="home-product-item__name">${product.name}</h4>
                    <div class="home-product-item__price">
                           ${product.priceOld ? '<span class="home-product-item__price-old">' + new Intl.NumberFormat().format(product.priceOld) + '₫</span>' : ''}
                        <span class="home-product-item__price-current">${new Intl.NumberFormat().format(product.priceCurrent)
            }₫</span>
                    </div>
                    <div class="home-product-item__favourite">
                    ${!product.isAvailable ? "<span>Tạm hết hàng</span>":""}
                    </div>
                </a>
            `;
        productContainer.appendChild(productElement);
    });

    // Thêm sự kiện click cho mỗi item sản phẩm
    var productItems = document.querySelectorAll(".home-product-item");
    productItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            var productId = this.dataset.id; // Lấy ID của sản phẩm
            console.log(productId);
            window.location.href = '/Home/ProductDetail/' + productId
            // Chuyển hướng đến trang chi tiết sản phẩm
        });
    });
}

initApp();
