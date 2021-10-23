import React, { useState } from "react";
import "./form.css";

const SelectProvinceCity = (props) => {
  const [chosenCity, setChosenCity] = useState("");
  const {
    province,
    cities,
    handleSetStep,
    handleSetProvince,
    handleSetProvinceName,
    handleSetCities,
    handleSetCity,
  } = props;

  const selectProvinceHandler = (e) => {
    handleSetCities([]);
    handleSetCity([]);
    handleSetProvince(e.target.value);

    if (e.target.value == 0) {
      handleSetProvince(0);
      handleSetCities([]);
    }
    if (e.target.value == 1) {
      handleSetCities([
        "اسلام‌شهر",
        "پاکدشت",
        "تهران",
        "دماوند",
        "رباط‌کریم",
        "ری",
        "ساوجبلاغ",
        "شمیرانات",
        "شهریار",
        "فیروزکوه",
        "ورامین",
      ]);
      handleSetProvinceName("تهران");
    }
    if (e.target.value == 2) {
      handleSetCities([
        "آستارا",
        "آستانه اشرفیه",
        "اَملَش",
        "بندر انزلی",
        "رشت",
        "رضوانشهر",
        "رودبار",
        "رودسر",
        "سیاهکل",
        "شَفت",
        "صومعه‌سرا",
        "طوالش",
        "فومَن",
        "لاهیجان",
        "لنگرود",
        "ماسال",
      ]);
      handleSetProvinceName("گیلان");
    }
    if (e.target.value == 3) {
      handleSetCities([
        "آذرشهر",
        "اسکو",
        "اهر",
        "بستان‌آباد",
        "بناب",
        "تبریز",
        "جلفا",
        "چاراویماق",
        "سراب",
        "شبستر",
        "مراغه",
      ]);
      handleSetProvinceName("آذربایجان شرقی");
    }
    if (e.target.value == 4) {
      handleSetCities([
        "آبادان",
        "امیدیه",
        "اندیمشک",
        "اهواز",
        "ایذه",
        "باغ‌ملک",
        "بندر ماهشهر",
        "بهبهان",
        "خرمشهر",
        "دزفول",
        "دشت آزادگان",
        "رامشیر",
        "رامهرمز",
        "شادگان",
        "شوش",
        "شوشتر",
      ]);
      handleSetProvinceName("خوزستان");
    }
    if (e.target.value == 5) {
      handleSetCities([
        "آباده",
        "ارسنجان",
        "استهبان",
        "اقلید",
        "بوانات",
        "پاسارگاد",
        "جهرم",
        "خرم‌بید",
        "خنج",
        "داراب",
        "زرین‌دشت",
        "سپیدان",
        "شیراز",
        "فراشبند",
        "فسا",
        "فیروزآباد",
        "قیر و کارزین",
        "کازرون",
        "لارستان",
        "لامِرد",
        "مرودشت",
        "ممسنی",
        "مهر",
        "نی‌ریز",
      ]);
      handleSetProvinceName("فارس");
    }
    if (e.target.value == 6) {
      handleSetCities([
        "آران و بیدگل",
        "اردستان",
        "اصفهان",
        "برخوار و میمه",
        "تیران و کرون",
        "چادگان",
        "خمینی‌شهر",
        "خوانسار",
        "سمیرم",
        "شهرضا",
        "سمیرم سفلی",
        "فریدن",
        "فریدون‌شهر",
        "فلاورجان",
        "کاشان",
        "گلپایگان",
        "لنجان",
        "مبارکه",
        "نائین",
        "نجف‌آباد",
        "نطنز",
      ]);
      handleSetProvinceName("اصفهان");
    }
    if (e.target.value == 7) {
      handleSetCities([
        "بردسکن",
        "تایباد",
        "تربت جام",
        "تربت حیدریه",
        "چناران",
        "خلیل‌آباد",
        "خواف",
        "درگز",
        "رشتخوار",
        "سبزوار",
        "سرخس",
        "فریمان",
        "قوچان",
        "کاشمر",
        "کلات",
        "گناباد",
        "مشهد",
        "مه ولات",
        "نیشابور",
      ]);
      handleSetProvinceName("خراسان رضوی");
    }
    if (e.target.value == 8) {
      handleSetCities(["آبیک", "البرز", "بوئین‌زهرا", "تاکستان", "قزوین"]);
      handleSetProvinceName("قزوین");
    }
    if (e.target.value == 9) {
      handleSetCities(["دامغان", "سمنان", "شاهرود", "گرمسار", "مهدی‌شهر"]);
      handleSetProvinceName("سمنان");
    }
    if (e.target.value == 10) {
      handleSetCities(["قم"]);
      handleSetProvinceName("قم");
    }
    if (e.target.value == 11) {
      handleSetCities([
        "آشتیان",
        "اراک",
        "تفرش",
        "خمین",
        "دلیجان",
        "زرندیه",
        "ساوه",
        "شازند",
        "کمیجان",
        "محلات",
      ]);
      handleSetProvinceName("مرکزی");
    }
    if (e.target.value == 12) {
      handleSetCities([
        "ابهر",
        "ایجرود",
        "خدابنده",
        "خرمدره",
        "زنجان",
        "طارم",
        "ماه‌نشان",
      ]);
      handleSetProvinceName("زنجان");
    }
    if (e.target.value == 13) {
      handleSetCities([
        "آمل",
        "بابل",
        "بابلسر",
        "بهشهر",
        "تنکابن",
        "جویبار",
        "چالوس",
        "رامسر",
        "ساری",
        "سوادکوه",
        "قائم‌شهر",
        "گلوگاه",
        "محمودآباد",
        "نکا",
        "نور",
        "نوشهر",
      ]);
      handleSetProvinceName("مازندران");
    }
    if (e.target.value == 14) {
      handleSetCities([
        "آزادشهر",
        "آق‌قلا",
        "بندر گز",
        "ترکمن",
        "رامیان",
        "علی‌آباد",
        "کردکوی",
        "کلاله",
        "گرگان",
        "گنبد کاووس",
        "مراوه‌تپه",
        "مینودشت",
      ]);
      handleSetProvinceName("گلستان");
    }
    if (e.target.value == 15) {
      handleSetCities([
        "اردبیل",
        "بیله‌سوار",
        "پارس‌آباد",
        "خلخال",
        "کوثر",
        "گِرمی",
        "مِشگین‌شهر",
        "نَمین",
        "نیر",
      ]);
      handleSetProvinceName("اردبیل");
    }
    if (e.target.value == 16) {
      handleSetCities([
        "ارومیه",
        "اشنویه",
        "بوکان",
        "پیرانشهر",
        "تکاب",
        "چالدران",
        "خوی",
        "سردشت",
        "سلماس",
        "شاهین‌دژ",
        "ماکو",
        "مهاباد",
        "میاندوآب",
        "نقده",
      ]);
      handleSetProvinceName("آذربایجان غربی");
    }
    if (e.target.value == 17) {
      handleSetCities([
        "اسدآباد",
        "بهار",
        "تویسرکان",
        "رزن",
        "کبودرآهنگ",
        "ملایر",
        "نهاوند",
        "همدان",
      ]);
      handleSetProvinceName("همدان");
    }
    if (e.target.value == 18) {
      handleSetCities([
        "بانه",
        "بیجار",
        "دیواندره",
        "سروآباد",
        "سقز",
        "سنندج",
        "قروه",
        "کامیاران",
        "مریوان",
      ]);
      handleSetProvinceName("کردستان");
    }
    if (e.target.value == 19) {
      handleSetCities([
        "اسلام‌آباد غرب",
        "پاوه",
        "ثلاث باباجانی",
        "جوانرود",
        "دالاهو",
        "روانسر",
        "سرپل ذهاب",
        "سنقر",
        "صحنه",
        "قصر شیرین",
        "کرمانشاه",
        "کنگاور",
        "گیلان غرب",
        "هرسین",
      ]);
      handleSetProvinceName("کرمانشاه");
    }
    if (e.target.value == 20) {
      handleSetCities([
        "ازنا",
        "الیگودرز",
        "بروجرد",
        "پل‌دختر",
        "خرم‌آباد",
        "دورود",
        "دلفان",
        "سلسله ,کوهدشت",
      ]);
      handleSetProvinceName("لرستان");
    }
    if (e.target.value == 21) {
      handleSetCities([
        "بوشهر",
        "تنگستان",
        "جم",
        "دشتستان",
        "دشتی",
        "دیر",
        "دیلم",
        "کنگان",
        "گناوه",
      ]);
      handleSetProvinceName("بوشهر");
    }
    if (e.target.value == 22) {
      handleSetCities([
        "بافت",
        "بردسیر",
        "بم",
        "جیرفت",
        "راور",
        "رفسنجان",
        "رودبار جنوب",
        "زرند",
        "سیرجان",
        "شهر بابک",
        "عنبرآباد",
        "قلعه گنج",
        "کرمان",
        "کوهبنان",
        "کهنوج",
        "منوجان",
      ]);
      handleSetProvinceName("کرمان");
    }
    if (e.target.value == 23) {
      handleSetCities([
        "ابوموسی",
        "بستک",
        "بندر عباس",
        "بندر لنگه",
        "جاسک",
        "حاجی‌آباد",
        "شهرستان خمیر",
        "رودان",
        "قشم",
        "پارسیان",
        "میناب",
      ]);
      handleSetProvinceName("هرمزگان");
    }
    if (e.target.value == 24) {
      handleSetCities([
        "اردل",
        "بروجن",
        "شهرکرد",
        "فارسان",
        "کوهرنگ",
        "لردگان",
      ]);
      handleSetProvinceName("چهارمحال و بختیاری");
    }
    if (e.target.value == 25) {
      handleSetCities([
        "ابرکوه",
        "اردکان",
        "بافق",
        "تفت",
        "خاتم",
        "صدوق",
        "طبس",
        "مهریز",
        "مِیبُد",
        "یزد",
      ]);
      handleSetProvinceName("یزد");
    }
    if (e.target.value == 26) {
      handleSetCities([
        "ایرانشهر",
        "چابهار",
        "خاش",
        "دلگان",
        "زابل",
        "زاهدان",
        "زهک",
        "سراوان",
        "سرباز",
        "کنارک",
        "نیک‌شهر",
      ]);
      handleSetProvinceName("سیستان و بلوچستان");
    }
    if (e.target.value == 27) {
      handleSetCities([
        "آبدانان",
        "ایلام",
        "ایوان",
        "دره‌شهر",
        "دهلران",
        "شیروان و چرداول",
        "مهران",
      ]);
      handleSetProvinceName("ایلام");
    }
    if (e.target.value == 28) {
      handleSetCities(["بویراحمد", "بهمئی", "دنا", "کهگیلویه", "گچساران"]);
      handleSetProvinceName("کهگیلویه و بویر احمد");
    }
    if (e.target.value == 29) {
      handleSetCities([
        "اسفراین",
        "بجنورد",
        "جاجرم",
        "شیروان",
        "فاروج",
        "مانه و سملقان",
      ]);
      handleSetProvinceName("خراسان شمالی");
    }
    if (e.target.value == 30) {
      handleSetCities([
        "بیرجند",
        "درمیان",
        "سرایان",
        "سربیشه",
        "فردوس",
        "قائنات",
        "نهبندان",
      ]);
      handleSetProvinceName("خراسان جنوبی");
    }
    if (e.target.value == 31) {
      handleSetCities([
        "کرج",
        "نظرآباد",
        "فردیس",
        "اشتهارد",
        "هشتگرد",
        "طالقان",
      ]);
      handleSetProvinceName("البرز");
    }
  };

  const selectCityHandler = (e) => {
    handleSetCity(e.target.value);
    setChosenCity(e.target.value);
  };

  const nextStep = () => {
    if (province && chosenCity) {
      handleSetStep(2);
    }
  };

  return (
    <>
      <div>
        <select
          className="select"
          dir="rtl"
          name="selectedProvince"
          onChange={selectProvinceHandler}
        >
          <option value="0">لطفا استان را انتخاب نمایید</option>
          <option value="1">تهران</option>
          <option value="2">گیلان</option>
          <option value="3">آذربایجان شرقی</option>
          <option value="4">خوزستان</option>
          <option value="5">فارس</option>
          <option value="6">اصفهان</option>
          <option value="7">خراسان رضوی</option>
          <option value="8">قزوین</option>
          <option value="9">سمنان</option>
          <option value="10">قم</option>
          <option value="11">مرکزی</option>
          <option value="12">زنجان</option>
          <option value="13">مازندران</option>
          <option value="14">گلستان</option>
          <option value="15">اردبیل</option>
          <option value="16">آذربایجان غربی</option>
          <option value="17">همدان</option>
          <option value="18">کردستان</option>
          <option value="19">کرمانشاه</option>
          <option value="20">لرستان</option>
          <option value="21">بوشهر</option>
          <option value="22">کرمان</option>
          <option value="23">هرمزگان</option>
          <option value="24">چهارمحال و بختیاری</option>
          <option value="25">یزد</option>
          <option value="26">سیستان و بلوچستان</option>
          <option value="27">ایلام</option>
          <option value="28">کهگلویه و بویراحمد</option>
          <option value="29">خراسان شمالی</option>
          <option value="30">خراسان جنوبی</option>
          <option value="31">البرز</option>
        </select>
      </div>
      {province ? (
        <div>
          <select
            className="select"
            dir="rtl"
            name="selectedCity"
            onChange={selectCityHandler}
          >
            <option value="0">لطفا شهر را انتخاب نمایید</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <select className="select" dir="rtl" name="selectedCity">
            <option value="0">لطفا استان را انتخاب نمایید</option>
          </select>
        </div>
      )}
      <button className="button" onClick={nextStep}>
        بعدی
      </button>
    </>
  );
};

export default SelectProvinceCity;
