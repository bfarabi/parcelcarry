import React from "react";
import "./Coverage.css";

const Coverage = () => {
  return (
    <>
      <div class="row coverage-area " style={{width:'99vw'}}>
        <div className="col-lg-6 ">
          <img className="w-75"
            src="https://redx.com.bd/images/revamp/bangladash-map.svg"
            alt=""
          />
        </div>
        <div className="col-lg-6 text-left py-4">
          <h1 style={{ fontWeight: "bold", padding: "2rem", color: "white" }}>
          পার্সেল ক্যারির লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে বিস্তৃত
          </h1>
          <p style={{ color: "white", padding: "5px" }}>
          আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে সবচেয়ে দ্রুতগতির সেবা
          </p>
          <button type="button" class="btn btn-danger px-5 py-3 my-5 ">
            কাভারেজ এলাকা দেখুন
          </button>
        </div>
      </div>
      {/* calculator area start */}

      <div className="row mx-5 p-4 calculator-area">
        <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
        ডেলিভারি ক্যালকুলেটর
        </h1>
        <p>
        আপনার শিপমেন্টের সুবিধার জন্য আগে থেকেই আপনার ডেলিভারী চার্জ সম্পর্কে ধারণা নিন
        </p>

        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )</label>
              <input
                type="number"
                class="form-control  p-3"
                id="exampleFormControlInput1"
                placeholder="পণ্যের ওজন লিখুন"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">পণ্যের বিক্রয়মূল্য</label>
              <input
                type="number"
                class="form-control p-3"
                id="exampleFormControlInput1"
                placeholder="পণ্যের বিক্রয়মূল্য লেখুন"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">পিক-আপ এলাকা</label>
              <select class="form-control p-3" id="exampleFormControlSelect1">
                <option selected>পিক-আপের এলাকা নির্বাচন করুন</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ডেলিভারি এলাকা</label>
              <select class="form-control p-3" id="exampleFormControlSelect1">
              <option selected>ডেলিভারি এলাকা নির্বাচন করুন</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
          
        </div>
        
      </div>
      <button type="button" class='btn btn-danger px-4 my-5'>ডেলিভারি চার্জ দেখুন</button>
      <div>
          <p>আপনি কি জানতে চান, যেকোনো লোকেশনে আপনার পার্সেল পাঠাতে কত খরচ হতে পারে?
আমাদের বিস্তারিত 
<span style={{color:'orange'}}> লিস্টটি দেখুন</span>. </p>
      </div>
    </>
  );
};

export default Coverage;
