---
sidebar_label: "2018年8月実施 機械力学 第2問"
tags:
  - Kobe-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 神戸大学 工学研究科 機械工学専攻 2018年8月実施 機械力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

問題[1]，[2]は別々の答案用紙に解答すること。

**[2]** 図2-1は，質量 $M$，重心回りの慣性モーメント $I$ の剛体ばりである。はりは，重心から距離 $L_1$ と $L_2$ の位置でそれぞればね定数 $k_1$ と $k_2$ のばねで支持されている。はりの回転角度を $\theta$（反時計回りが正），重心の上下方向の変位を $x$（上向きが正）とする。このはりについて以下の問いに答えよ。ただし，回転角度 $\theta$ は微小であり，$\sin\theta\fallingdotseq\theta,\ \cos\theta\fallingdotseq1$ で近似できるものとする。

![図2-1 2自由度振動系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/dynamics_201808_2_original_figure_1.png)

**(1)** 図2-1の2自由度振動系の自由振動を表す運動方程式を示せ。

**(2)** 重心回りの回転運動と重心の上下方向の運動が非連成（二つの振動モード間の相互作用がない状態）になる条件を示せ。

**(3)** (2)で示した状態において，はりの重心に質量 $m$ のおもりがばね定数 $k_3$ のばねと粘性係数 $c$ のダンパを介して結合されたものとする（図2-2）。地面が $x_0=X\sin\omega t$ で上下に振動するとき，はりの重心の上下方向の運動とおもりの上下方向の運動を表す運動方程式を示せ。

![図2-2 3自由度振動系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/dynamics_201808_2_original_figure_2.png)

**(4)** (3)で示した状態において，粘性係数 $c$ を0としたとき，はりの変位 $x$ の振幅が0となる条件を示せ。

**(5)** 以下の5つの単語の英訳を示せ。

- 運動方程式
- 固有振動数
- 振動
- 変位
- 自由度

#### 题目描述

问题[1]、[2]须分别在不同的答题纸上作答。

**[2]** 图2-1为质量 $M$、绕质心转动惯量 $I$ 的刚性梁。在距质心分别为 $L_1,L_2$ 的位置，由弹簧常数分别为 $k_1,k_2$ 的弹簧支承。设梁的转角为 $\theta$（逆时针为正），质心的竖直位移为 $x$（向上为正）。回答下列问题。设 $\theta$ 为微小角，可近似为 $\sin\theta\fallingdotseq\theta,\ \cos\theta\fallingdotseq1$。

**(1)** 写出图2-1中两自由度振动系统自由振动的运动方程。

**(2)** 写出绕质心的转动与质心的竖直运动解耦（两个振动模态间没有相互作用）的条件。

**(3)** 在第(2)问所述状态下，通过弹簧常数为 $k_3$ 的弹簧和黏性系数为 $c$ 的阻尼器，将质量为 $m$ 的重物连接到梁的质心，如图2-2。当地面按 $x_0=X\sin\omega t$ 上下振动时，写出梁质心的竖直运动和重物竖直运动的运动方程。

**(4)** 在第(3)问所述状态下，令黏性系数 $c=0$，写出梁位移 $x$ 的振幅为零的条件。

**(5)** 写出以下五个日语词的英语译法。

- 運動方程式（运动方程）
- 固有振動数（固有频率）
- 振動（振动）
- 変位（位移）
- 自由度（自由度）

## **Kai**

### (1)

静的つり合い位置からの変位を用いる。左右のばね取付点の変位は $x-L_1\theta$、$x+L_2\theta$。復元力と重心回りモーメントから


$$
\boxed{M\ddot x+(k_1+k_2)x+(k_2L_2-k_1L_1)\theta=0},
$$



$$
\boxed{I\ddot\theta+(k_2L_2-k_1L_1)x+(k_1L_1^2+k_2L_2^2)\theta=0}.
$$


### (2)

連成係数がゼロになる条件は $\boxed{k_1L_1=k_2L_2}$。

### (3)

$k_1,k_2$ の伸びは地面との相対変位で定まる。重心に取り付けた吸振器は回転モーメントを与えない。従って


$$
\boxed{\begin{aligned}&M\ddot x+c(\dot x-\dot x_1)+(k_1+k_2)x\\&\quad+k_3(x-x_1)=(k_1+k_2)X\sin\omega t
\end{aligned}},
$$



$$
\boxed{m\ddot x_1+c(\dot x_1-\dot x)+k_3(x_1-x)=0}.
$$


### (4)

定常調和応答 $x=X_b\sin\omega t$、$x_1=X_1\sin\omega t$ を代入すると


$$
\begin{pmatrix}k_1+k_2+k_3-M\omega^2&-k_3\\-k_3&k_3-m\omega^2\end{pmatrix}
\begin{pmatrix}X_b\\X_1\end{pmatrix}=\begin{pmatrix}(k_1+k_2)X\\0\end{pmatrix}.
$$


非零の加振について $X_b=0$ とするには $k_3-m\omega^2=0$。従って


$$
\boxed{\omega=\sqrt{\frac{k_3}{m}}}.
$$


このとき行列式は $-k_3^2\ne0$、$X_1=-(k_1+k_2)X/k_3$ で、吸振器の復元力が地面からの加振力を打ち消す。無減衰系なので、任意の初期条件による自由振動まで消えるという条件ではなく、定常調和応答の振幅についての結果である。

### (5)

| 日本語 | 英語 |
| --- | --- |
| 運動方程式 | equation of motion |
| 固有振動数 | natural frequency |
| 振動 | vibration / oscillation |
| 変位 | displacement |
| 自由度 | degree of freedom |

## **Reference**

- [神戸大学公式問題の保存版：平成31年度 機械力学、PDF 2ページ](https://web.archive.org/web/20220524073517id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/5_H31_Machine.pdf)
