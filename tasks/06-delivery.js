/**
 * ============================================================
 * TASK 06 — DELIVERY PRICE CALCULATOR
 * LEVEL: HARD
 * TIME: 20–25 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * switch, if / else, Arithmetic Operators,
 * Comparison Operators, Logical Operators, Type Conversion
 *
 * TAPŞIRIQ:
 * Sifariş məbləği, çatdırılma zonası və VIP statusuna
 * əsasən yekun ödənişi hesablayan proqram hazırlayın.
 *
 * ÇATDIRILMA ZONALARI:
 * 1 -> City Center   -> 3 AZN
 * 2 -> Suburbs       -> 6 AZN
 * 3 -> Outside City  -> 10 AZN
 *
 * ƏSAS QAYDALAR:
 * - Sifariş məbləği 50 AZN və ya daha çoxdursa,
 *   çatdırılma pulsuzdur.
 * - VIP müştərilərə sifariş məbləğindən 10% endirim edilir.
 * - Pulsuz çatdırılma şərti endirimdən əvvəlki
 *   sifariş məbləğinə əsasən müəyyən olunur.
 *
 * TƏLƏBLƏR:
 * 1. Sifariş məbləğini, zonanı və VIP statusunu qəbul edin.
 * 2. Məbləği Number() ilə ədədə çevirin.
 * 3. Məbləğ 0-dan böyük olmalıdır.
 * 4. switch istifadə edərək çatdırılma haqqını müəyyən edin.
 * 5. Yanlış zona daxil edildikdə xəta qaytarın.
 * 6. Məbləğ 50 və daha çoxdursa, delivery = 0 olmalıdır.
 * 7. VIP statusu true olduqda 10% endirim hesablayın.
 * 8. Yekun məbləği hesablayın:
 *    total = orderAmount - discount + delivery
 * 9. Bütün nəticələri obyekt şəklində return edin.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * Input: (40, 2, true)
 *
 * {
 *   orderAmount: 40,
 *   zone: 2,
 *   vip: true,
 *   discount: 4,
 *   delivery: 6,
 *   total: 42
 * }
 *
 * BONUS:
 * Promo kod SAVE5 olduqda VIP endirimindən sonra
 * əlavə 5 AZN endirim tətbiq edin.
 * Sifariş məbləği 0-dan aşağı düşməməlidir.
 *
 * QAYDALAR:
 * - prompt(), alert() və console.log() istifadə etməyin.
 * - switch və if / else istifadə edin.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function delivery(amount, zone, isVIP, promoCode) {
  // TODO: Tapşırığın həllini burada yaz.
  // return ...;
  let orderAmount = Number(amount);

  if (orderAmount <= 0) {
    return { error: "Invalid input!" };
  }

  let deliveryPrice = 0;

  if (zone === 1) {
    deliveryPrice = 3;
  } 
  
  else if (zone === 2) {
    deliveryPrice = 6;
  } 
  
  else if (zone === 3) {
    deliveryPrice = 10;
  }
   else {
    return { error: "Invalid input!" };
  }

  if (orderAmount >= 50) {
    deliveryPrice = 0;
  }

  let discount = 0;

  if (isVIP === true) {
    discount = orderAmount * 0.1;
  }

  if (promoCode === "SAVE5") {
    discount = discount + 5;
  }

  let total = orderAmount - discount + deliveryPrice;

  return {
    orderAmount: orderAmount,
    zone: zone,
    vip: isVIP,
    discount: discount,
    delivery: deliveryPrice,
    total: total
  };
}

module.exports = { delivery };
