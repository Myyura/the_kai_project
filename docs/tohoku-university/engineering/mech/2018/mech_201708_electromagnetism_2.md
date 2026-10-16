---
sidebar_label: "2017年8月実施 電磁気学 第2問"
tags:
  - Tohoku-University
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Electrical-Electronic.Circuits.Mutual-Inductance
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 電磁気学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

同軸の長いソレノイド $C_1,C_2$ は、ともに長さ $L$、巻数 $N$ で、半径はそれぞれ $r_1,r_2$（$r_1>r_2$）である。外側の $C_1$ に電源から $I=I_0\sin\omega t$ が流れる。内側の $C_2$ にはスイッチを介して抵抗 $R$ が接続され、最初スイッチは開いている。真空の透磁率を $\mu_0$ とし、端効果と巻線の抵抗は無視する。

![同軸ソレノイドと二次側負荷](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_solenoids.svg)

1. マクスウェル方程式からアンペールの法則の積分形を導け。ただし変位電流は無視する。
2. マクスウェル方程式からファラデーの法則の積分形を導け。
3. $C_1$ 内部の磁場を求めよ。
4. 電源電圧 $V$ と電源が供給する電力 $P$ を求めよ。
5. $C_2$ の両端に生じる誘導電圧 $V_2$ を求めよ。
6. スイッチを閉じた場合、$C_2$ の両端電圧と電源の供給電力はどう変わるか。理由とともに述べよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

两长螺线管同轴，长度均为 $L$、匝数均为 $N$，外半径 $r_1$ 大于内半径 $r_2$。外管电流 $I_0\sin\omega t$；内管经开关接负载 $R$，开关起初断开，忽略端效应与绕组电阻。（1）（2）从麦克斯韦方程导出安培及法拉第定律的积分形式；（3）求外管内部磁场；（4）求电源电压与功率；（5）求内管开路电压；（6）说明接通负载后电压与电源功率的变化。

## **Kai**

### (1)

変位電流を無視すると $\nabla\times\boldsymbol H=\boldsymbol J$。面 $S$ の境界を向きの整合する閉曲線 $C$ として、ストークスの定理より

$$
\boxed{\oint_C\boldsymbol H\cdot d\boldsymbol l=\int_S\boldsymbol J\cdot d\boldsymbol S=I_{\mathrm{enc}}}.
$$

### (2)

$\nabla\times\boldsymbol E=-\partial\boldsymbol B/\partial t$ を固定した面 $S$ 上で積分して

$$
\boxed{\oint_C\boldsymbol E\cdot d\boldsymbol l=-\frac{d}{dt}\int_S\boldsymbol B\cdot d\boldsymbol S=-\frac{d\Phi}{dt}}.
$$

### (3)

管内外を通る長方形のアンペール経路をとる。長いソレノイドの外部磁場を無視すれば $HL=NI$ なので

$$
\boxed{H_1=\frac{NI_0}{L}\sin\omega t}.
$$

向きは巻線の電流に対する右ねじの方向である。

### (4)

鎖交磁束から自己インダクタンスは $L_1=\mu_0N^2\pi r_1^2/L$。電源が自己誘導起電力に逆らって加える電圧を正とすると

$$
\boxed{V=L_1\dot I=\frac{\mu_0N^2\pi r_1^2}{L}\omega I_0\cos\omega t}.
$$

瞬時電力と周期平均電力は

$$
\boxed{P(t)=VI=\frac12 L_1\omega I_0^2\sin2\omega t},\qquad \boxed{\overline P=0}.
$$

磁場への蓄積と電源への返還が交互に生じる。

### (5)

$C_2$ に鎖交するのは断面 $\pi r_2^2$ の磁束だから、相互インダクタンスは

$$
M=\frac{\mu_0N^2\pi r_2^2}{L}.
$$

二次側の電圧極性を選んで

$$
\boxed{V_2=M\dot I=M\omega I_0\cos\omega t}.
$$

端子の取り方を逆にすれば符号は逆になる。

### (6)

一次電流を引き続き指定の $I_0\sin\omega t$ に保つものとする。二次電流 $I_2$ の正方向を一次磁束の変化を打ち消す向きに選ぶと、$L_2=\mu_0N^2\pi r_2^2/L=M$ として

$$
L_2\dot I_2+RI_2=M\dot I.
$$

定常状態で $\delta=\tan^{-1}(\omega L_2/R)$ とおけば

$$
I_2=\frac{\omega MI_0}{\sqrt{R^2+\omega^2L_2^2}}\cos(\omega t-\delta),\qquad V_2'=RI_2.
$$

従って二次端子電圧は開路時の $R/\sqrt{R^2+\omega^2L_2^2}$ 倍に小さくなり、位相が $\delta$ 遅れる。これは二次電流の作る磁場が元の磁束変化を打ち消すためである。一次電圧は $V'=L_1\dot I-M\dot I_2$ に変化し、平均供給電力は

$$
\boxed{\overline P'=R\overline{I_2^2}=\frac{R\omega^2M^2I_0^2}{2(R^2+\omega^2L_2^2)}>0}.
$$

電源は負荷抵抗で消費されるジュール熱を補う。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 24ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
