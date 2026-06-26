import { User, Phone, ChevronDown, MessageCircle, Star } from "lucide-react";

export default function ConsultationForm({ isPopup = false }) {
  return (
    <div className={`bg-white w-full mx-auto z-10 relative ${isPopup ? '' : 'rounded-2xl md:rounded-[24px] p-4 md:p-6 shadow-2xl border border-gray-100 max-w-md'}`}>
      <p className="text-[11px] font-bold text-[#f97316] mb-2 tracking-widest uppercase">Instant Case Check</p>
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#314259] mb-2 leading-tight">Check Claim Eligibility</h2>
      <p className="text-gray-500 mb-6 text-sm">Free evaluation by experts in 24 hours.</p>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={16} className="text-yellow-500" />
            </div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1572ed]/20 focus:border-[#1572ed] transition-all text-sm bg-gray-50/50 text-[#314259] placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Phone Number & Case Type Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={16} className="text-yellow-500" />
              </div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1572ed]/20 focus:border-[#1572ed] transition-all text-sm bg-gray-50/50 text-[#314259] placeholder:text-gray-400"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              Case Type
            </label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1572ed]/20 focus:border-[#1572ed] transition-all text-sm appearance-none bg-gray-50/50 text-[#314259]">
                <option>Licensing & Registration</option>
                <option>NOCs &Clearances</option>
                <option>Company Registration</option>
                <option>Other Services</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="terms"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1572ed] focus:ring-[#1572ed] cursor-pointer"
            required
          />
          <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
            I accept the <a href="#" className="text-[#1572ed] hover:underline font-medium">Terms & Conditions</a> and <a href="#" className="text-[#1572ed] hover:underline font-medium">Privacy Policy</a>.
          </label>
        </div>

        {/* Buttons */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-md shadow-orange-500/20"
          >
            GET FREE REVIEW
          </button>

          <button
            type="button"
            className="w-full bg-white hover:bg-[#f97316] text-[#f97316] hover:text-white border-2 border-[#f97316] font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </button>
        </div>
      </form>

      {/* Footer / Social Proof */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex -space-x-2">
          <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="avatar" />
          <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="avatar" />
          <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="avatar" />
          <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=4" alt="avatar" />
          <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="avatar" />
        </div>
        <div className="flex flex-col text-xs text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1 font-bold text-gray-800">
            <Star size={12} className="fill-[#f97316] text-[#f97316]" />
            4.9/5 <span className="text-gray-500 font-normal">(85+ reviews)</span>
          </div>
          <div className="text-gray-400 font-bold mt-[1px] text-[10px]">98% RETENTION RATE</div>
        </div>
      </div>
    </div>
  );
}
