
/**
 * ============================================================
 * TASK 03 — STUDENT GRADE CALCULATOR
 * LEVEL: MEDIUM
 * TIME: 15–20 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * Arithmetic Operators, Comparison Operators,
 * Logical Operators, if / else if / else, Number()
 *
 * TAPŞIRIQ:
 * Tələbənin 3 imtahan balına əsasən orta balını və
 * yekun qiymətini müəyyən edən proqram hazırlayın.
 *
 * TƏLƏBLƏR:
 * 1. Tələbənin adını və 3 imtahan balını qəbul edin.
 * 2. Bütün balları Number() ilə ədədə çevirin.
 * 3. Üç imtahanın orta balını hesablayın.
 * 4. if / else if / else istifadə edərək qiyməti müəyyən edin.
 *
 * QİYMƏTLƏNDİRMƏ:
 * 90–100  -> Excellent
 * 70–<90  -> Good
 * 50–<70  -> Passed
 * 0–<50   -> Failed
 *
 * 5. Balların hər biri 0–100 aralığında olmalıdır.
 * 6. Bal rəqəm deyilsə və ya aralıqdan kənardadırsa,
 *    "Invalid score!" nəticəsini qaytarın.
 * 7. Tələbənin adı, balları, orta balı və qiyməti
 *    nəticə obyektində olmalıdır.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * Input: ("Ali", 85, 90, 95)
 *
 * Student: Ali
 * Exam 1: 85
 * Exam 2: 90
 * Exam 3: 95
 * Average: 90
 * Result: Excellent
 *
 * BONUS:
 * Orta balı iki onluq rəqəmə qədər göstərin.
 *
 * QAYDALAR:
 * - prompt(), alert() və console.log() istifadə etməyin.
 * - if / else if / else istifadə edin.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function studentGrade(name, exam1, exam2, exam3) {
  // TODO: Tapşırığın həllini burada yaz.
  // return ...;

  let score1 = Number(exam1);
  let score2 = Number(exam2);
  let score3 = Number(exam3);

  if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100 || score3 < 0 || score3 > 100) {
    return { error: "Invalid score!" };
  }

  let average = (score1 + score2 + score3) / 3;
  let result = "";

  if (average >= 90) {
    result = "Excellent";
  } 
  
  else if (average >= 70) {
    result = "Good";
  } 
  
  else if (average >= 50) {
    result = "Passed";
  } 
  
  else {
    result = "Failed";
  }

  return {
    student: name,
    exam1: score1,
    exam2: score2,
    exam3: score3,
    average: average,
    result: result
  };
}


module.exports = { studentGrade };
