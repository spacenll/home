// متغير لتخزين تفاصيل السلة

    let cart = [];
 function openImage(src) {
            const overlay = document.getElementById('overlay');
            const largeImage = document.getElementById('largeImage');
            largeImage.src = src;
            overlay.style.display = 'flex';
        }

        function closeImage() {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'none';
        }



const productsSection = document.querySelector('.products-section');
const howSection = document.querySelector('.how-to-order-section');
const orderSection = document.querySelector('.order-form-section');
const TwoPSection = document.querySelector('.two-products-section');
const ToPSection = document.querySelector('.top-product-section');
const LastSection = document.querySelector('.last-product');
// وظيفة لتفعيل الحركة عند ظهور القسم
function handleScroll() {
    const sectionPosition = productsSection.getBoundingClientRect().top; // 
     const sectionPosition1 = howSection.getBoundingClientRect().top;
       const sectionPosition2 = orderSection.getBoundingClientRect().top;
          const sectionPosition3 = TwoPSection.getBoundingClientRect().top;
      const sectionPosition4 = ToPSection.getBoundingClientRect().top;
       const sectionPosition5 = LastSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight; // ارتفاع الشاشة

    if (sectionPosition < screenHeight) {
        productsSection.classList.add('show'); // إضافة كلاس 'show' لتفعيل الحركة
    }
   if (sectionPosition1 < screenHeight)
        {
           howSection.classList.add('show');
        }
     if (sectionPosition2 < screenHeight)
        {
           orderSection.classList.add('show');
        }
   if (sectionPosition3 < screenHeight)
        {
           TwoPSection.classList.add('show');
        }
    if (sectionPosition4 < screenHeight)
        {
           ToPSection.classList.add('show');
        }
    if (sectionPosition5 < screenHeight)
        {
           LastSection.classList.add('show');
        }
}

// الاستماع لحدث التمرير
window.addEventListener('scroll', handleScroll);


// تأثير التحميل والظهور التدريجي
document.addEventListener('DOMContentLoaded', function () {
    // بدء التحميل بعد تحميل الصفحة
    setTimeout(function () {
        // الحصول على عنصر شاشة التحميل
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            // تخفي شاشة التحميل تدريجيًا
            loadingScreen.style.opacity = '0';
            setTimeout(function () {
                loadingScreen.style.display = 'none';

                // إظهار المحتوى الرئيسي
                const mainContent = document.getElementById('main-content');
                if (mainContent) {
                    mainContent.style.display = 'block';
                    mainContent.classList.add('visible');
                } 
            }, 800); // تأخير اختفاء شاشة التحميل
        } else {
            console.error('Element with id "loading-screen" not found.');
        }
    }, 1300); // تأخير بدء الانتقال
});


// إضافة المنتج إلى السلة
function addToCart(productId, productName) {
    const productPrice = getProductPrice(productId).price;
    if (productPrice <= 0) {
         Swal.fire({
            title: 'عذراً',
            text: 'لقد نفذت الكمية من هذا المنتج, اختر شيء اخر.',
            icon: 'warning',
            confirmButtonText: 'حسنًا'
        });
        return;
    }
    const productExists = cart.find(item => item.id === productId);

    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }


     Swal.fire({
        title: `تمت الإضافة ! "${productName}" `,
    text: `صار بإمكانك ترسل طلبك او تضيف منتج ثاني لو تحب`,
        icon: 'success',
        confirmButtonText: 'تم'
    });

    updateCartTotal();
 
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartTotalElement = document.getElementById('total-cart');
     const cartTotalElement2 = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `${total} ريال`;
    }
}
// التمرير إلى نموذج الطلب
function scrollToOrderForm() {
    const orderFormSection = document.getElementById('order');
    if (orderFormSection) {
        orderFormSection.scrollIntoView({ behavior: 'smooth' });
    }
closeCart();
}

// الحصول على سعر المنتج
function getProductPrice(productId) {
    const prices = {
          121: { name: "Karak #4", price: 3.5 },
    120: { name: "Latte #4", price: 3.5 },
    119: { name: "Creamy #4", price: 3.5 },
    118: { name: "Azura #4", price: 3.5 },
    117: { name: "Bronze #1", price: 3.5 },
    116: { name: "White #1", price: 3.5 },
    115: { name: "Celestial #1", price: 3.5 },
    114: { name: "Black #1", price: 3.5 },
    113: { name: "Red #1", price: 3.5 },
    112: { name: "Rosa #1", price: 3.5 },
    109: { name: "Couco #3", price: 3.5 },
    108: { name: "White #2", price: 3.5 },
    107: { name: "Green #2", price: 3.5 },
    106: { name: "Yashma #2", price: 3.5 },
    105: { name: "Brown #2", price: 3.5 },
    104: { name: "Blue #1", price: 3.5 },
    103: { name: "Spiral #1", price: 3.5 },
    102: { name: "Turquoise #1", price: 3.5 },
    101: { name: "Yellow #1", price: 3.5 }

    };
    return prices[productId] || { name: "غير معروف", price: 0 };
}

// حساب الإجمالي
function calculateTotal(includeDelivery = false, deliveryCost = 0) {
    const productsTotal = finalTotal;
    return includeDelivery ? productsTotal + deliveryCost : productsTotal;
}

// عرض السلة
function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const productTotal = document.getElementById('product-total');
    const delivery = document.getElementById('delivery-cost');

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>السلة فارغة.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <p>
                    ‎ ${item.price} ‎ = ${item.name} ‎ ×  ‎  ${item.quantity}  ر.ع   ‎
                    <button onclick="increaseQuantity(${index})">+</button>
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <button onclick="removeFromCart(${index})">حذف</button>
                </p>
            `;
            cartItems.appendChild(itemDiv);
        });
    }

const deliveryCost = getDeliveryCost();

// حساب عدد الأكواب (جميع المنتجات)
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

// حساب سعر الأكواب بعد الخصم حسب القاعدة
let cupsCost = 0;

if (totalItems === 2) {
    cupsCost = 6;
} else if (totalItems === 3) {
    cupsCost = 9;
} else if (totalItems > 3) {
    cupsCost = 9 + (totalItems - 3) * 3.5;
}

// استبدال السعر الكلي للأكواب بدلًا من حسابهم كلهم بسعر 3.5
const productsTotal = cupsCost;

// حساب المجموع النهائي
const finalTotal = productsTotal + deliveryCost;

// عرض معلومات السعر الخاص
const discountInfo = document.createElement('p');
discountInfo.style.color = 'green';
discountInfo.textContent = `تم تطبيق سعر خاص: ${cupsCost.toFixed(2)} ريال`;
cartItems.appendChild(discountInfo);

// عرض التفاصيل الأخرى
productTotal.textContent = `المجموع الكلي: ${finalTotal.toFixed(2)} ريال`;
delivery.textContent = `تكلفة التوصيل: ${deliveryCost} ريال`;
cartTotal.textContent = `${productsTotal.toFixed(2)} ريال`;

cartModal.classList.add('visible');
cartBackdrop.classList.add('visible');

}


// إغلاق السلة
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartBackdrop = document.getElementById('cart-backdrop');
    cartModal.classList.remove('visible');
    cartBackdrop.classList.remove('visible');
}

// زيادة الكمية
function increaseQuantity(index) {
    cart[index].quantity += 1;
    showCart();
}

// تقليل الكمية
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeFromCart(index);
    }
    showCart();
}

// حذف منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}

// تحديث خيارات التوصيل بناءً على المنطقة
function updateDeliveryOptions() { 
    const region = document.getElementById("region").value;
    const delivery = document.getElementById("delivery");
    delivery.innerHTML = "";

    if (region === "السعادة") {
        delivery.innerHTML = `<option value="1.5">مندوب - 1.5 ريال</option>`;
    } else if (region === "صلالة" || region === "عوقد" || region === "صحلنوت") {
        delivery.innerHTML = `<option value="2">مندوب - 2 ريال</option>`;
    } else if (region === "مسقط" || region === "اخرى") {
        delivery.innerHTML = `
            <option value="1">نقليات - 1 ريال</option>
            <option value="2">مندوب إلى الباب - 2 ريال</option>
        `;
    } else if (region === "صور" || region === "جعلان ابو علي") {
        delivery.innerHTML = `<option value="2.5">نقليات - 2.5 ريال</option>`;
    } else if (region === "مناطق اخرى") {
        delivery.innerHTML = `<option value=""> عذراً ,سيتم تأكيد تكلفة التوصيل واخبارك 🙏</option>`;
    } else if (region === "بركاء | المعبيلة") {
        delivery.innerHTML = `<option value="1.5">نقليات - 1.5 ريال</option>`;
    } else {
        delivery.innerHTML = `<option value="">اختر طريقة التوصيل</option>`;
    }
}



// حساب تكلفة التوصيل
function getDeliveryCost() {
    const deliverySelect = document.getElementById("delivery");
    const selectedOption = deliverySelect.options[deliverySelect.selectedIndex];
    return parseFloat(selectedOption.value) || 0;
}

// إرسال الطلب عبر واتساب
function sendWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const region = document.getElementById("region").value;
    const delivery = document.getElementById("delivery").value;
    const notes = document.getElementById('notes').value.trim();
    const deliveryCost = getDeliveryCost();
    const includeDelivery = document.getElementById("includeDelivery").checked;

    // تحقق من المدخلات
    if (!name || !phone || !address || !region || !delivery) {
        Swal.fire({
            title: 'ملاحظة',
            text: 'يرجى تعبئة جميع المدخلات المطلوبة',
            icon: 'warning',
            confirmButtonText: 'حسنًا'
        });
        console.error("هناك مدخلات ناقصة:", { name, phone, address, region, delivery });
        return;
    }

    // تحقق من السلة
    if (cart.length === 0) {
        Swal.fire({
            title: 'ملاحظة',
            text: 'سلتك فارغة! يرجى إضافة منتجات',
            icon: 'warning',
            confirmButtonText: 'حسنًا'
        });
        return;
    }

    const total = calculateTotal(includeDelivery, deliveryCost);
    const productsMessage = cart.map(item => `- ${item.name} (الكمية: ${item.quantity}, السعر : ${item.price * item.quantity} ريال عماني)`).join('\n');
    const message = 
        `مرحبًا، أريد تقديم طلب:\n` +
        `الاسم: ${name}\n` +
        `الرقم: ${phone}\n` +
        `العنوان: ${address}\n` +
        `المنطقة: ${region}\n` +
        `المنتجات:\n${productsMessage}\n` +
        `مبلغ التوصيل: ${delivery} ريال\n` +
        `المجموع الكلي: ${total} ريال\n` +
        `ملاحظات إضافية: ${notes || '-'}`;


function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-975991783/n111COXsuawaEOfnsdED',
      'value': 1.0,
      'currency': 'AED',
      'event_callback': callback
  });
  return false;
}
    Swal.fire({
        title: 'شكراً لك',
        text: `سيتم توجيهك إلى الواتساب مع رسالة تتضمن ما طلبته، وسيتواصل معك المندوب قريبًا!`,
        icon: 'success',
        confirmButtonText: 'متابعة'
    }).then((result) => {
         if (result.isConfirmed){
                const doneurl= '#ok';
                 window.location.href = doneurl;
        const whatsappLink = `https://wa.me/+96879289653?text=${encodeURIComponent(message)}`;
              const whatsappLink2 = 'thankyou'
        window.open(whatsappLink, '_blank');
          window.location.href= whatsappLink2 ;  
             
        }     
    });
}
