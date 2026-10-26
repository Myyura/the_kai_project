---
sidebar_label: "2021年7月実施 基礎力学"
tags:
  - Kyoto-University
  - Physics.Mechanics.Newtonian-Gravitation
---

# 京都大学 情報学研究科 数理工学専攻 2021年7月実施 基礎科目 問題5（基礎力学）

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E6%83%85%E5%A0%B1%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B4%E5%AE%9F%E6%96%BD_%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

質量 $M$、半径 $R_S$ の密度一様な球 A の中心から $r\ (\ge R_S)$ の距離にある質量 $m$ の質点の運動を考える。万有引力定数を $G$ とする。以下の問いに答えよ。

(i) $r\ge R_S$ のときの球 A によって生じる万有引力のポテンシャルを計算せよ。

(ii) 質点が球 A の表面上から速さ $V_E$ で脱出可能（無限遠点 $r=\infty$ に到達可能）とする。速さ $V_E$ の最小値を求めよ。

(iii) (ii) の速度 $V_E$ が光の速度 $c$ で与えられるとする。そのときの球 A の半径 $R_S$ を $c,M$ を用いて求めよ。

### 题目描述

考虑质量为 $m$ 的质点在一个质量为 $M$、半径为 $R_S$ 的均匀球 A 外运动。质点到球心的距离为 $r\ge R_S$，万有引力常数为 $G$。

(i) 求球 A 在 $r\ge R_S$ 处产生的引力势。

(ii) 质点从球面以速率 $V_E$ 出发，能够逃逸至无穷远。求 $V_E$ 的最小值。

(iii) 若 (ii) 中的最小逃逸速率等于光速 $c$，用 $c,M$ 表示球的半径 $R_S$。

## **Kai**

### (i)

無限遠をポテンシャルの基準とする。球対称性と万有引力のガウスの法則より、球外の重力加速度は

$$
\boldsymbol g(r)=-\frac{GM}{r^2}\boldsymbol e_r.
$$

したがって、単位質量当たりのポテンシャル $\Phi$ は

$$
\Phi(r)=-\int_\infty^r\boldsymbol g(s)\cdot\boldsymbol e_r\,ds
=\boxed{-\frac{GM}{r}}\qquad(r\ge R_S).
$$

質点のポテンシャルエネルギーは $U(r)=m\Phi(r)=-GMm/r$ である。

### (ii)

無限遠での速さを $v_\infty$ とすると、エネルギー保存則から

$$
\frac12mV_E^2-\frac{GMm}{R_S}
=\frac12mv_\infty^2\ge0.
$$

よって必要条件は $V_E^2\ge2GM/R_S$ であり、外向きに出発すれば等号の場合にも無限遠へ脱出できる。最小逃逸速度は

$$
\boxed{V_{E,\min}=\sqrt{\frac{2GM}{R_S}}}.
$$

### (iii)

$V_{E,\min}=c$ を代入して

$$
c^2=\frac{2GM}{R_S},\qquad
\boxed{R_S=\frac{2GM}{c^2}}.
$$

## **Reference**

- [京都大学公式問題：2022年度数理工学専攻、基礎力学（PDF 9ページ）](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
- [Miyake：2021年実施 基礎［5］基礎力学](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E6%83%85%E5%A0%B1%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2021%E5%B9%B4%E5%AE%9F%E6%96%BD_%E5%9F%BA%E7%A4%8E.html)
