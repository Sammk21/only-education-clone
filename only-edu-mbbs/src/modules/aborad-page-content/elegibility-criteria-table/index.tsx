import React from "react";

const ElegibilityCriteriaTable = () => {
  return (
    <section className="py-6 my-6 ">
      <h4 className="text-4xl text-center text-dark  dark:text-light ">
        Eligibility Criteria for UG or PG Courses{" "}
      </h4>
      <div className="relative overflow-x-auto flex justify-center pt-6 rounded-2xl ">
        <table className=" w-full max-w-5xl text-sm text-left rtl:text-right text-dark dark:text-accent  t">
          <thead className="text-xs text-dark uppercase bg-accent dark:bg-foreground borber-b border-b-dark dark:text-light">
            <tr>
              <th
                scope="col"
                className="sm:px-6 py-3 text-center text-xs sm:text-sm"
              >
                For Bachelor's programs
              </th>
              <th
                scope="col"
                className="sm:px-6 py-3 text-center text-xs sm:text-sm"
              >
                For Master's programs
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light border-b dark:dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
              <td
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
              >
                Students need to obtain 60%-65% in 12th class or GRE
              </td>
              <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
                Completed certificate of bachelors or Diploma for 3 to 4 years
              </td>
            </tr>

            <tr className="bg-light border-b dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
              <td
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
              >
                Required language tests such as IELTS and TOEFL exams
              </td>
              <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
                English Language proficiency tests such as IELTS, TOEFL, etc
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ElegibilityCriteriaTable;
