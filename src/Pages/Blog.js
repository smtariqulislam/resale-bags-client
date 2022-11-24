import React from "react";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold">Blog</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                Question & answer
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What are the different ways to manage a state in a React
                  application?{" "}
                </h3>

                <p className="mt-3">
                  There are four main types of state you need to properly manage
                  in your React apps:
                  <br />
                  1. Local state
                  <br />
                  2. Global state
                  <br />
                  3. Server state
                  <br />
                  4. URL state
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  How does prototypical inheritance work?
                </h3>

                <p className="mt-3">
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is a unit test? Why should we write unit tests?
                </h3>

                <p className="mt-3">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  React vs. Angular vs. Vue?
                </h3>

                <p className="mt-3">
                  <span className="text-lg font-bold"> Angular:</span> <br />
                  Angular has a steep learning curve, considering it is a
                  complete solution, and mastering Angular requires you to learn
                  associated concepts like TypeScript and MVC. Even though it
                  takes time to learn Angular, the investment pays dividends in
                  terms of understanding how the front end works.
                  <br />
                  <span className="text-lg font-bold"> React:</span>
                  <br />
                  React offers a Getting Started guide that should help one set
                  up React in about an hour. The documentation is thorough and
                  complete, with solutions to common issues already present on
                  Stack Overflow. React is not a complete framework and advanced
                  features require the use of third-party libraries. This makes
                  the learning curve of the core framework not so steep but
                  depends on the path you take with additional functionality.
                  However, learning to use React does not necessarily mean that
                  you are using the best practices.
                  <br />
                  <span className="text-lg font-bold"> Vue:</span>
                  <br /> Vue provides

                  higher customizability and hence is easier to learn than
                  Angular or React. Further, Vue has an overlap with Angular and
                  React with respect to their functionality like the use of
                  components. Hence, the transition to Vue from either of the
                  two is an easy option. However, simplicity and flexibility of
                  Vue is a double-edged sword — it allows poor code, making it
                  difficult to debug and test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
