import React from "react";

const EligibilityIndiaCourse = () => {
  return (
    <section className="sm:px-12 py-6 my-6 px-2 ">
      <h4 className="text-center text-4xl py-6 mb-6 ">
        Courses Eligibility Criteria
      </h4>
      <table className=" w-full  text-sm text-left rtl:text-right text-dark dark:text-accent  t">
        <thead className="text-xs text-dark uppercase bg-accent dark:bg-foreground borber-b border-b-dark dark:text-light">
          <tr>
            <th
              scope="col"
              className="sm:px-6 py-3 text-center text-xs sm:text-sm"
            >
              Management
            </th>
            <th
              scope="col"
              className="sm:px-6 py-3 text-center text-xs sm:text-sm"
            >
              Engineering
            </th>
            <th
              scope="col"
              className="sm:px-6 py-3 text-center text-xs sm:text-sm"
            >
              Medical
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-light border-b dark:dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
            <td
              scope="row"
              className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
            >
              To pursue an MBA, complete at least 3 years of Bachelor Degree in
              any stream and score 50% of marks (for general category)
            </td>
            <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
              Final year To pursue BBA, complete the 12th class education with
              commerce stream and score above 50% of marks
            </td>
            <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
              Graduate students are also eligible
            </td>
          </tr>

          <tr className="bg-light border-b dark:bg-accent/30 dark:border-b-dark sm:text-sm text-xs">
            <td
              scope="row"
              className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap"
            >
              To pursue an MBA, complete at least 3 years of Bachelor Degree in
              any stream and score 50% of marks (for general category)
            </td>
            <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
              Final year To pursue BBA, complete the 12th class education with
              commerce stream and score above 50% of marks
            </td>
            <td className="px-6 py-4 font-normal whitespace-nowrap text-center dark:text-light text-wrap">
              Exams – CAT/ XAT/ CMAT/ NMAT/ MAT/ ATMA
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default EligibilityIndiaCourse;
