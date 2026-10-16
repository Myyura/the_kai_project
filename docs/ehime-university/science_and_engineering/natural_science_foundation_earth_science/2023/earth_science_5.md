---
sidebar_label: "2023年度 5（X線回折）"
tags:
  - Ehime-University
  - Chemistry.Physical-Chemistry.X-Ray-Diffraction
---

# 愛媛大学 理工学研究科 地球進化学コース 2023年度 5

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%84%9B%E5%AA%9B%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E7%9B%A4%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0_%E5%9C%B0%E7%90%83%E7%A7%91%E5%AD%A6%E5%88%86%E9%87%8E/2023%E5%B9%B4%E5%BA%A6.html) refined with GPT 6 Astra)

## **Description**

### 問1

図1のように格子面間隔 $d$ の単結晶に波長 $\lambda$ の単色 X 線が格子面と角度 $\theta$ をなして入射する。反射線と格子面の角度も $\theta$ とする。$n$ は自然数である。文章中の (ア)～(エ) に適切な数式または語句を入れよ。

1番目と2番目の格子面で反射する X 線の経路差 $l_1+l_2$ は (ア) である。(ア) が $\lambda$ の整数倍なら、反射 X 線の合成波の振幅は最も (イ) くなる。1番目と $n$ 番目の格子面で反射する場合、経路差は (ア) の (ウ) 倍になる。この値が波長の整数倍でも合成波の振幅は最も (イ) くなる。これを一般化した式 (ア) $=$ (エ) は Bragg の式と呼ばれる。

![結晶面におけるX線の反射](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/ehime_university/earth_science_2023_5_fig1.png)

### 問2

常温常圧下で、ガラス製キャピラリーに封入した粉末セリア $\mathrm{CeO_2}$ に単色 X 線を照射し、図2の二次元回折パターンを得る。試料と検出器が十分離れている場合、図2左の幾何学関係が成り立つものとする。

① カメラ長 $L=620\,\mathrm{mm}$、波長 $\lambda=0.02\,\mathrm{nm}$ のとき、$(111)$ 面の回折円半径が $R_{111}=40\,\mathrm{mm}$ であった。格子面間隔 $d$ を $\mathrm{\mathring A}$ 単位で小数第1位まで求め、計算過程を示せ。

② セリアは立方晶系であり、格子定数 $a$ と面間隔 $d_{hkl}$ の関係は

$$
\frac1{d_{hkl}^2}=\frac{h^2+k^2+l^2}{a^2}
$$

である。①の条件から $a$ を $\mathrm{\mathring A}$ 単位で小数第2位まで求め、小数第3位を四捨五入せよ。計算過程を示せ。

③ 斜方晶系フォルステライト $\mathrm{Mg_2SiO_4}$ は三つの格子定数 $a,b,c$ を持つ。室温・未知の高圧下で、①と同じ波長・検出器を用いたが、カメラ長を $620\,\mathrm{mm}$ よりかなり長くしたため $(021)$、$(101)$ の二つの回折パターンしか得られなかった。これでは $a,b,c$ をすべて決定できない理由を具体的に答えよ。

④ ③の測定条件をどのように改良すれば $a,b,c$ をすべて決定できるか、一案を述べよ。

![粉末セリア試料の二次元X線回折パターン撮影](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/ehime_university/earth_science_2023_5_fig2.png)

#### 题目描述

**第1问**：晶面间距为 $d$，X 射线波长为 $\lambda$，入射和反射方向与晶面的夹角均为 $\theta$。依图1补全：相邻晶面反射波的光程差 (ア)、满足整倍波长条件时振幅最 (イ)、第1和第 $n$ 层晶面的光程差倍数 (ウ)，以及 Bragg 方程右侧的 (エ)。

**第2问**：常温常压下以单色 X 射线照射毛细管中的粉末氧化铈，按图2给定的远距离几何关系处理。

1. 相机长度 $L=620\,\mathrm{mm}$，波长 $0.02\,\mathrm{nm}$，$(111)$ 衍射环半径 $40\,\mathrm{mm}$。求晶面间距，单位为 Å、保留一位小数，并写出过程。
2. 氧化铈为立方晶系，满足 $d_{hkl}^{-2}=(h^2+k^2+l^2)/a^2$。求晶格常数 $a$，单位为 Å、保留两位小数，并写出过程。
3. 对室温、未知高压下的斜方晶系镁橄榄石 $\mathrm{Mg_2SiO_4}$，使用相同波长和探测器，但显著加长相机长度，仅测得 $(021)$ 与 $(101)$ 衍射环。具体解释为何不能求出全部三个晶格常数 $a,b,c$。
4. 提出一种能确定全部三个晶格常数的测量改进方案。

## **Kai**

### 問1

$l_1=l_2=d\sin\theta$ である。位相差が $2\pi$ の整数倍なら強め合うので、

$$
\boxed{(\text{ア})=2d\sin\theta,\quad(\text{イ})=\text{大き},\quad(\text{ウ})=n-1}.
$$

Bragg の条件は

$$
\boxed{2d\sin\theta=m\lambda\quad(m=1,2,\ldots)}
$$

である。よって $\boxed{(\text{エ})=m\lambda}$。ここで回折次数を表す $m$ は、格子面番号の $n$ と区別して用いた。

### 問2

#### ①

図2の遠距離近似の三角形から、

$$
\frac RL=\frac{1/d}{1/\lambda}=\frac\lambda d.
$$

$\lambda=0.02\,\mathrm{nm}=0.2\,\mathrm{\mathring A}$ なので、

$$
\boxed{d=\frac{\lambda L}{R}=\frac{0.2\times620}{40}=3.1\,\mathrm{\mathring A}}.
$$

#### ②

$(h,k,l)=(1,1,1)$ より、

$$
\boxed{a=\sqrt3\,d=\sqrt3\times3.1\simeq5.37\,\mathrm{\mathring A}}.
$$

#### ③

斜方晶系では

$$
\frac1{d_{hkl}^2}=\frac{h^2}{a^2}+\frac{k^2}{b^2}+\frac{l^2}{c^2}.
$$

したがって二つの反射から得るのは

$$
\frac1{d_{021}^2}=\frac4{b^2}+\frac1{c^2},\qquad
\frac1{d_{101}^2}=\frac1{a^2}+\frac1{c^2}
$$

だけである。未知数 $a^{-2},b^{-2},c^{-2}$ が三つなのに独立な式は二つしかなく、一意に決まらない。圧力も未知なので、その圧力における格子定数を外部の値で固定することもできない。

#### ④

カメラ長を短くして検出可能な散乱角範囲を広げ、既存の二反射と独立な指数を持つ第三の反射を測定する。例えば $(002)$ が得られれば、

$$
\frac1{d_{002}^2}=\frac4{c^2}
$$

から $c$ が決まり、上の二式から $a,b$ も決まる。

## **Reference**

- [大学公式問題（PDF 6–7ページ）](https://earth.sci.ehime-u.ac.jp/inshi/expertise/2023-1-expertise.PDF)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%84%9B%E5%AA%9B%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%90%86%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E5%9F%BA%E7%9B%A4%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0_%E5%9C%B0%E7%90%83%E7%A7%91%E5%AD%A6%E5%88%86%E9%87%8E/2023%E5%B9%B4%E5%BA%A6.html)
