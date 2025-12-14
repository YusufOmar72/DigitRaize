"use client";

import {
  Tag,
  DollarSign,
  Wallet,
  CreditCard,
  Coins,
  Receipt,
  PiggyBank,
  HandCoins,
  Banknote,
  ReceiptText,
  BadgeDollarSign,
  WalletCards,
  CircleDollarSign,
  TrendingDown,
  Percent,
  ShoppingCart,
  ShoppingBag,
  Sparkles,
  Gem,
} from "lucide-react";

const pricingIcons = [
  { name: "Tag", icon: Tag },
  { name: "Wallet", icon: Wallet },
  { name: "CreditCard", icon: CreditCard },
  { name: "Coins", icon: Coins },
  { name: "Receipt", icon: Receipt },
  { name: "PiggyBank", icon: PiggyBank },
  { name: "HandCoins", icon: HandCoins },
  { name: "Banknote", icon: Banknote },
  { name: "ReceiptText", icon: ReceiptText },
  { name: "BadgeDollarSign", icon: BadgeDollarSign },
  { name: "WalletCards", icon: WalletCards },
  { name: "CircleDollarSign", icon: CircleDollarSign },
  { name: "TrendingDown", icon: TrendingDown },
  { name: "Percent", icon: Percent },
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "ShoppingBag", icon: ShoppingBag },
  { name: "Sparkles", icon: Sparkles },
  { name: "Gem", icon: Gem },
];

export default function IconTestPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-zinc-900 dark:text-white">
          Affordable Pricing Icon Test
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
          Select an icon for "Affordable Pricing"
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {pricingIcons.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 border border-zinc-200 dark:border-zinc-700"
            >
              <div className="mb-4">
                <Icon className="w-16 h-16 text-zinc-700 dark:text-zinc-300 stroke-[1.5]" />
              </div>
              <p className="text-sm font-medium text-zinc-900 dark:text-white text-center">
                {name}
              </p>
            </div>
          ))}
        </div>

        {/* Preview section showing how it would look in context */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-zinc-900 dark:text-white">
            Preview in Context
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pricingIcons.slice(0, 4).map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-zinc-700 dark:text-zinc-300 stroke-[1.5]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
                  Affordable Pricing
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mx-auto max-w-[280px]">
                  Great websites shouldn't break the bank. We offer transparent, startup-friendly pricing with no hidden fees, delivering exceptional value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

