import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const data = [
    {ques : "Whats Up?",
     ans: "all is fine"
    },
    {ques : "Whats Up222?",
     ans: "all is fine"
    },
    {ques : "Whats Up?333",
     ans: "all is fine"
    },
    {ques : "Whats Up?444",
     ans: "all is fine"
    }


]


// const DisclosureCode = (
//     <Disclosure as="div" className="mt-2">
//           {({ open }) => (
//             <>
//               <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
//                 <span>Do you offer technical support?</span>
//                 <ChevronUpIcon
//                   className={`${
//                     open ? 'rotate-180 transform' : ''
//                   } h-5 w-5 text-purple-500`}
//                 />
//               </Disclosure.Button>
//               <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
//                 No.
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
    
    
// )

const ListOfDisclosures = data.map(faq => (  
    <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg 4 bg-gradient-to-r from-primary-yellow to-blue-500 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{faq.ques}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {faq.ans}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>  
  ))

export default function Faq() {
  return (
    <div className="w-full px-4 mt-8">
      <div className="mx-auto w-full rounded-2xl  p-2">
   {ListOfDisclosures}
        
      </div>
    </div>
  )
}
