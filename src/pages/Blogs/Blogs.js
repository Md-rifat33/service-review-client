import React from 'react'
import useTitle from '../../Hooks/useTitle'

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="flex flex-col w-full border-opacity-50 mt-8">
      <div className="w-3/4 mx-auto">
        {/* Blog 1 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : What is the differences between SQL and NoSQL?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        {/* Blog 2 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : What is JWT, and how does it work?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
        </div>
        {/* Blog 3 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : What is the difference between javascript and NodeJS?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
        {/* Blog 4 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs
