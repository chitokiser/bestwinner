import React from 'react';
import { PhoneCall, Mail, MessageCircle } from 'lucide-react';

// 한국 담당 문의처 (푸터와 문의 페이지에서 같이 씀)
const PHONE_DISPLAY = '0869 452 114';
const PHONE_TEL = '0869452114';
const EMAIL = 'Banknetwork@hanmail.net';
const QR_SRC = '/images/contact/zalo-korea-qr.png';

export default function KoreaContact({ t, qrSize = 112 }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  const L = (vi, ko, en) => (isVi ? vi : isKo ? ko : en);

  return (
    <div className="rounded-xl border border-gold-500/30 bg-navy-900/70 p-4 space-y-3">
      <p className="text-[11px] font-extrabold tracking-wide text-gold-400">
        {L('Liên hệ phụ trách Hàn Quốc', '한국 담당 문의', 'Korea contact')}
      </p>
      <div className="space-y-2 text-xs text-slate-300">
        <a href={`tel:${PHONE_TEL}`} className="flex items-center space-x-2 hover:text-gold-400 transition-colors">
          <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
          <span className="font-bold text-white">{PHONE_DISPLAY}</span>
        </a>
        <a href={`mailto:${EMAIL}`} className="flex items-center space-x-2 hover:text-gold-400 transition-colors break-all">
          <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
          <span>{EMAIL}</span>
        </a>
      </div>
      <div className="flex items-center gap-3 pt-1">
        <img
          src={QR_SRC}
          alt={L('Mã QR kết bạn Zalo', 'Zalo 친구추가 QR 코드', 'Zalo QR code to add as a friend')}
          width={qrSize}
          height={qrSize}
          loading="lazy"
          className="rounded-lg bg-white p-1 flex-shrink-0"
          style={{ width: qrSize, height: qrSize }}
        />
        <div className="text-xs text-slate-300 leading-relaxed">
          <p className="flex items-center gap-1.5 font-bold text-white">
            <MessageCircle className="w-4 h-4 text-gold-400" />
            {L('Kết bạn Zalo', 'Zalo 친구추가', 'Add us on Zalo')}
          </p>
          <p className="mt-1 text-slate-400">
            {L('Quét mã QR bằng ứng dụng Zalo.', 'Zalo 앱으로 QR 코드를 스캔하세요.', 'Scan the QR code with the Zalo app.')}
          </p>
        </div>
      </div>
    </div>
  );
}
