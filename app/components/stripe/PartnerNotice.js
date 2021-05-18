import Link from 'next/link';
import Image from 'next/image';

export default function PartnerNotice() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12">
        <h3 className="-mb-7 -ml-2" aria-label="Stripe logo">
          <Image
            height={60}
            width={60}
            src="/stripe-logo-blurple.svg"
          />
        </h3>
        <p className="-ml-0.5 mt-2 text-sm text-gray-700">Personal Assistant partners with Stripe for secure payments and financial services.</p>
        <ul className="flex flex-row justify-start mt-2">
          <li className="mr-2">
            <Link href="#">
              <a className="text-sm font-bold text-blue-900">Terms</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <a className="text-sm font-bold text-blue-900">Privacy</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <a className="text-sm font-bold text-blue-900">Contact</a>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <select name="lang" id="lang" className="text-sm font-bold text-blue-900">
                <option value="US">English (US)</option>
              </select>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}