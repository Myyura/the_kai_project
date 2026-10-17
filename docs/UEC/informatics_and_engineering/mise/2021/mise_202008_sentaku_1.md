---
sidebar_label: "2020年8月実施 選択問題1 材料力学"
tags:
  - University-of-Electro-Communications
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Thermal-Deformation-Compatibility
  - Engineering.Mechanics-of-Materials.Torsion
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題1 材料力学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問1，問2，問3に答えよ。

### 問1

図1に示すように，長さ $\ell$ の単純支持ばりに分布荷重 $w(x)=w_0x/\ell$ が作用している。はりの曲げ剛性を $EI$ とする。$A$ 点を $x$ 座標の原点（$x=0$）とするとき，次の問いに答えよ。

(1) 支点 $A$ と支点 $B$ の支点反力 $R_A$ と $R_B$ を求めよ。

(2) $x$ の任意の位置（$0\le x\le\ell$）におけるはりのせん断力 $F$ と曲げモーメント $M$ を $x$ の関数として表せ。

(3) $x$ の任意の位置（$0\le x\le\ell$）におけるはりのたわみ角 $\theta$ とたわみ曲線 $y$ を $x$ の関数として表せ。

![図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_1_fig1.png)

### 問2

図2に示すように，2枚の長さ $\ell$ の鋼板の間に長さ $\ell$ の銅板を接着して積層板を製作した。このとき積層板に応力は発生していない。鋼板と銅板それぞれの横断面の断面積を $A_S,A_C$，縦弾性係数を $E_S,E_C$，線膨張係数を $\alpha_S,\alpha_C$ とし，$\alpha_S<\alpha_C$ とする。積層板の温度を $\Delta T$ だけ上昇させたとき，次の問いに答えよ。

(1) 鋼板と銅板に生じる熱応力 $\sigma_S$ と $\sigma_C$ を求めよ。

(2) 積層板の伸び量 $\delta$ を求めよ。

![図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_1_fig2.png)

### 問3

図3に示すように，直径 $d$，長さ $\ell_1,\ell_2$ の2本の丸棒1，2のそれぞれの片端を剛体壁に固定した。丸棒1の自由端 $B$ を角度 $\phi$ ねじった状態で保持し，丸棒1の自由端 $B$ と丸棒2の自由端 $C$ を接合して離したとする。せん断弾性係数を $G$ として，次の問いに答えよ。

(1) 丸棒1と丸棒2に生じるねじりモーメント $T_1$ と $T_2$ を求めよ。

(2) 丸棒1と丸棒2に生じるねじれ角 $\phi_1$ と $\phi_2$ を求めよ。

(3) 丸棒1と丸棒2に蓄えられるねじりのひずみエネルギー $U_1,U_2$ を求めよ。

![図3](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_1_fig3.png)

#### 题目描述

回答下列第1题、第2题、第3题。

### 第1题

如图1，长度为 $\ell$ 的简支梁承受分布载荷 $w(x)=w_0x/\ell$。梁的抗弯刚度为 $EI$。以 $A$ 点为 $x$ 坐标的原点（$x=0$），回答下列问题。

(1) 求支点 $A$ 与支点 $B$ 的支反力 $R_A,R_B$。

(2) 将梁任意位置 $x$（$0\le x\le\ell$）处的剪力 $F$ 和弯矩 $M$ 表示为 $x$ 的函数。

(3) 将梁任意位置 $x$（$0\le x\le\ell$）处的转角 $\theta$ 和挠曲线 $y$ 表示为 $x$ 的函数。

### 第2题

如图2，将长度为 $\ell$ 的铜板粘接在两块长度为 $\ell$ 的钢板之间，制成层合板。此时层合板中没有应力。钢板、铜板各自的横截面积为 $A_S,A_C$，杨氏模量为 $E_S,E_C$，线膨胀系数为 $\alpha_S,\alpha_C$，且 $\alpha_S<\alpha_C$。当层合板温度升高 $\Delta T$ 时，回答下列问题。

(1) 求钢板与铜板中产生的热应力 $\sigma_S,\sigma_C$。

(2) 求层合板的伸长量 $\delta$。

### 第3题

如图3，直径均为 $d$、长度分别为 $\ell_1,\ell_2$ 的两根圆杆1、2，各有一端固定在刚性墙上。将圆杆1的自由端 $B$ 扭转角度 $\phi$ 并保持该状态，然后将圆杆1的自由端 $B$ 与圆杆2的自由端 $C$ 接合后松开。设剪切模量为 $G$，回答下列问题。

(1) 求圆杆1与圆杆2中产生的扭矩 $T_1,T_2$。

(2) 求圆杆1与圆杆2中的扭转角 $\phi_1,\phi_2$。

(3) 求圆杆1与圆杆2中储存的扭转应变能 $U_1,U_2$。

## **Kai**

### 問1

反力は上向きを正とする。荷重合力 $w_0\ell/2$ は $x=2\ell/3$ に作用するので

$$
\boxed{R_A=\frac{w_0\ell}{6},\qquad R_B=\frac{w_0\ell}{3}}.
$$

左側部分の力とモーメントのつり合いから、通常の $F=M'$ の符号で

$$
\begin{gathered}
\boxed{F(x)=\frac{w_0\ell}{6}-\frac{w_0x^2}{2\ell}},\\
\boxed{M(x)=\frac{w_0\ell x}{6}-\frac{w_0x^3}{6\ell}}.
\end{gathered}
$$

$y$ を下向き正、$M$ を下側が引張りとなる向き正とすると $EIy''=-M$。2回積分して $y(0)=y(\ell)=0$ を使うと

$$
\boxed{y(x)=\frac{w_0x}{360EI\ell}(7\ell^4-10\ell^2x^2+3x^4)},
$$

$$
\boxed{\begin{gathered}
\theta(x)=y'(x)\\
=\frac{w_0}{360EI\ell}(7\ell^4-30\ell^2x^2+15x^4)
\end{gathered}}.
$$

### 問2

上下対称なので曲げは生じず、共通の軸ひずみを $\varepsilon$ とする。適合条件と外力0の条件は

$$
\begin{gathered}
\sigma_S=E_S(\varepsilon-\alpha_S\Delta T),\\
\sigma_C=E_C(\varepsilon-\alpha_C\Delta T),\\
2A_S\sigma_S+A_C\sigma_C=0.
\end{gathered}
$$

したがって

$$
\varepsilon=\frac{2A_SE_S\alpha_S+A_CE_C\alpha_C}{2A_SE_S+A_CE_C}\Delta T,
$$

$$
\begin{gathered}
\boxed{\sigma_S=\frac{A_CE_SE_C(\alpha_C-\alpha_S)\Delta T}{2A_SE_S+A_CE_C}},\\
\boxed{\sigma_C=-\frac{2A_SE_SE_C(\alpha_C-\alpha_S)\Delta T}{2A_SE_S+A_CE_C}}.
\end{gathered}
$$

鋼板は引張り、銅板は圧縮となる。伸びは

$$
\boxed{\delta=\frac{2A_SE_S\alpha_S+A_CE_C\alpha_C}{2A_SE_S+A_CE_C}\ell\Delta T}.
$$

### 問3

$I_p=\pi d^4/32$。接合部のつり合いとねじれの適合条件から、各棒のねじりモーメントの大きさは等しく

$$
\begin{gathered}
T_1=T_2=T,\\
\phi_1=\frac{T\ell_1}{GI_p},\\
\phi_2=\frac{T\ell_2}{GI_p},\\
\phi_1+\phi_2=\phi.
\end{gathered}
$$

よって

$$
\begin{gathered}
\boxed{T_1=T_2=\frac{\pi d^4G\phi}{32(\ell_1+\ell_2)}},\\
\boxed{\phi_i=\frac{\ell_i\phi}{\ell_1+\ell_2}\quad(i=1,2)}.
\end{gathered}
$$

両棒の接合部への作用方向は互いに逆である。ひずみエネルギーは $U_i=T\phi_i/2$ なので

$$
\boxed{U_i=\frac{\pi d^4G\ell_i\phi^2}{64(\ell_1+\ell_2)^2}\quad(i=1,2)}.
$$

これは最終的に振動が減衰して静止した状態の値であり、保持を離した瞬間の過渡状態とは区別する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 3–5ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
