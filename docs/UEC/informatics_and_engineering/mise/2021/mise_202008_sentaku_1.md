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

### 問1

長さ $\ell$、曲げ剛性 $EI$ の単純支持ばりに、下向きの分布荷重 $w(x)=w_0x/\ell$ が作用する。左支点 $A$ を $x=0$、右支点 $B$ を $x=\ell$ とする。

1. 支点反力 $R_A,R_B$ を求めよ。
2. 任意の断面 $0\le x\le\ell$ のせん断力 $F$ と曲げモーメント $M$ を求めよ。
3. たわみ角 $\theta$ とたわみ曲線 $y$ を求めよ。

### 問2

長さ $\ell$ の銅板を同じ長さの2枚の鋼板で上下から対称に挟み、接着した。初期応力はない。鋼板1枚の断面積を $A_S$、銅板の断面積を $A_C$、縦弾性係数を $E_S,E_C$、線膨張係数を $\alpha_S,\alpha_C$（$\alpha_S<\alpha_C$）とする。積層板の温度を一様に $\Delta T$ 上昇させる。

1. 鋼板、銅板に生じる熱応力 $\sigma_S,\sigma_C$ を求めよ。
2. 積層板の伸び $\delta$ を求めよ。

### 問3

直径 $d$、長さ $\ell_1,\ell_2$ の丸棒1、2は、互いに向き合う同一軸上に置かれ、外側の各端が剛体壁に固定されている。棒1の自由端を角度 $\phi$ だけねじって保持し、ねじられていない棒2の自由端と接合してから保持を離す。横弾性係数はともに $G$ とする。

1. 最終的な静的平衡で両棒に生じるねじりモーメント $T_1,T_2$ を求めよ。
2. 両棒のねじれ角 $\phi_1,\phi_2$ を求めよ。
3. 両棒に蓄えられるねじりひずみエネルギー $U_1,U_2$ を求めよ。

#### 题目描述

问1：长 $\ell$、弯曲刚度 $EI$ 的简支梁承受向下三角分布荷载 $w_0x/\ell$，求两端反力、剪力、弯矩、转角及挠曲线。问2：长 $\ell$ 的铜板被上下两块同长钢板对称夹住并粘接，初始无应力；每块钢板截面积为 $A_S$，铜板为 $A_C$，弹性模量和膨胀系数按下标区分，$\alpha_S<\alpha_C$。均匀升温 $\Delta T$ 后求两材料热应力与总伸长。问3：同直径 $d$、剪切模量 $G$、长度分别为 $\ell_1,\ell_2$ 的两圆杆外端固定；将杆1内端预扭 $\phi$ 后与未扭转的杆2内端接合、撤去保持力，求最终静态平衡时两杆的扭矩、扭角和应变能。

## **Kai**

### 問1

反力は上向きを正とする。荷重合力 $w_0\ell/2$ は $x=2\ell/3$ に作用するので

$$
\boxed{R_A=\frac{w_0\ell}{6},\qquad R_B=\frac{w_0\ell}{3}}.
$$

左側部分の力とモーメントのつり合いから、通常の $F=M'$ の符号で

$$
\boxed{F(x)=\frac{w_0\ell}{6}-\frac{w_0x^2}{2\ell}},\qquad
\boxed{M(x)=\frac{w_0\ell x}{6}-\frac{w_0x^3}{6\ell}}.
$$

$y$ を下向き正、$M$ を下側が引張りとなる向き正とすると $EIy''=-M$。2回積分して $y(0)=y(\ell)=0$ を使うと

$$
\boxed{y(x)=\frac{w_0x}{360EI\ell}(7\ell^4-10\ell^2x^2+3x^4)},
$$

$$
\boxed{\theta(x)=y'(x)=\frac{w_0}{360EI\ell}(7\ell^4-30\ell^2x^2+15x^4)}.
$$

### 問2

上下対称なので曲げは生じず、共通の軸ひずみを $\varepsilon$ とする。適合条件と外力0の条件は

$$
\sigma_S=E_S(\varepsilon-\alpha_S\Delta T),\quad
\sigma_C=E_C(\varepsilon-\alpha_C\Delta T),\quad
2A_S\sigma_S+A_C\sigma_C=0.
$$

したがって

$$
\varepsilon=\frac{2A_SE_S\alpha_S+A_CE_C\alpha_C}{2A_SE_S+A_CE_C}\Delta T,
$$

$$
\boxed{\sigma_S=\frac{A_CE_SE_C(\alpha_C-\alpha_S)\Delta T}{2A_SE_S+A_CE_C}},\qquad
\boxed{\sigma_C=-\frac{2A_SE_SE_C(\alpha_C-\alpha_S)\Delta T}{2A_SE_S+A_CE_C}}.
$$

鋼板は引張り、銅板は圧縮となる。伸びは

$$
\boxed{\delta=\frac{2A_SE_S\alpha_S+A_CE_C\alpha_C}{2A_SE_S+A_CE_C}\ell\Delta T}.
$$

### 問3

$I_p=\pi d^4/32$。接合部のつり合いとねじれの適合条件から、各棒のねじりモーメントの大きさは等しく

$$
T_1=T_2=T,\qquad
\phi_1=\frac{T\ell_1}{GI_p},\quad
\phi_2=\frac{T\ell_2}{GI_p},\quad
\phi_1+\phi_2=\phi.
$$

よって

$$
\boxed{T_1=T_2=\frac{\pi d^4G\phi}{32(\ell_1+\ell_2)}},\qquad
\boxed{\phi_i=\frac{\ell_i\phi}{\ell_1+\ell_2}\quad(i=1,2)}.
$$

両棒の接合部への作用方向は互いに逆である。ひずみエネルギーは $U_i=T\phi_i/2$ なので

$$
\boxed{U_i=\frac{\pi d^4G\ell_i\phi^2}{64(\ell_1+\ell_2)^2}\quad(i=1,2)}.
$$

これは最終的に振動が減衰して静止した状態の値であり、保持を離した瞬間の過渡状態とは区別する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 3–5ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
