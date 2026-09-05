---
sidebar_label: 2021年7月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Proportional-Integral-Derivative-and-Integral-Proportional-Derivative-Control
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---
# 京都大学 情報学研究科 システム科学専攻 2021年7月実施 専門科目 制御工学

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6882d45e000000002001afc7?xsec_token=ABv7C785zMbXjgoCBH6HH8Ond0K0iL_I33XXSF6B6rn-A=), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_sys.pdf)
### 問題 1
図1のフィードバック制御系において、伝達関数 $P(s)$ と $F(s)$ はそれぞれ以下の微分方程式で記述されるシステムを表すとする。

$$
\frac{d^2y(t)}{dt^2} - 5\frac{dy(t)}{dt} + 4y(t) = u(t)
$$

$$
a\frac{dz(t)}{dt} + z(t) = y(t)
$$

また、

$$
K(s) = K_P + \frac{K_I}{s} + K_D s
$$

とする。
$a, K_P, K_I, K_D$ は定数パラメータである。以下の設問に答えよ。

(1) 伝達関数 $P(s), F(s)$ と、$r$ から $y$ への伝達関数 $G_{yr}(s)$ を求めよ。

(2) $a = 0, K_P = 2, K_I = 0, K_D = 10$ のとき、単位ステップ入力 $r(t) = 1$ に対する応答 $y(t)$ を求めよ。

(3) $K_I = 1$ のとき、フィードバック制御系が安定となるような $a, K_P, K_D$ の条件を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p1.png" width="300" alt=""/>
</figure>

---

### 問題 2

$P(s)$ は図2のようなベクトル軌跡を持つ伝達関数であり、それぞれの極は $0$（重複はない）であるか実部が負である。図2の破線はベクトル軌跡の漸近線を表す。
$k$ は正の定数とする。以下の設問に答えよ。

(1) 図3(a)のフィードバック制御系が安定であるような $k$ の条件を求めよ。

(2) 図3(a)のフィードバック制御系のゲイン余裕が 20dB 以上になるような $k$ の条件を求めよ。

(3) 図3(b)のフィードバック制御系が $[-0.25, 0.25]$ の範囲にあるすべての実数 $\delta$ に対して安定であるような $k$ の条件を求めよ。

(4) 自然数 $n$ と非負の実数 $a_0, a_1, \ldots, a_{n-1}$ に対して、

$$
\frac{1}{s^n + a_{n-1}s^{n-1} + \cdots + a_1s + a_0}
$$

は図2のようなベクトル軌跡を持つ伝達関数とする。このうち $n$ が最小であるようなものを求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p2.png" width="450" alt=""/>
</figure>

### 题目描述

1. 对图 1 所示反馈控制系统，传递函数 $P(s)$ 与 $F(s)$ 所表示的系统分别由下列微分方程描述：

   $$
   \frac{d^2y(t)}{dt^2}
   -5\frac{dy(t)}{dt}
   +4y(t)=u(t),
   $$

   $$
   a\frac{dz(t)}{dt}+z(t)=y(t).
   $$

   控制器为

   $$
   K(s)=K_P+\frac{K_I}{s}+K_Ds,
   $$

   其中 $a,K_P,K_I,K_D$ 为常数参数。

   （1）求 $P(s)$、$F(s)$，以及从参考输入 $r$ 到输出 $y$ 的传递函数 $G_{yr}(s)$。

   （2）当

   $$
   a=0,\qquad K_P=2,\qquad K_I=0,\qquad K_D=10
   $$

   时，求单位阶跃输入 $r(t)=1$ 对应的响应 $y(t)$。

   （3）当 $K_I=1$ 时，求使反馈控制系统稳定的 $a,K_P,K_D$ 条件。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p1.png" width="300" alt=""/>
   </figure>

2. 传递函数 $P(s)$ 具有图 2 所示的矢量轨迹，虚线表示其渐近线。每个极点或者为 $0$（零极点不重合），或者实部为负。令 $k$ 为正常数。

   （1）求使图 3(a) 的反馈控制系统稳定的 $k$ 的条件。

   （2）求使图 3(a) 的反馈控制系统增益裕度至少为 $20\,\mathrm{dB}$ 的 $k$ 的条件。

   （3）求使图 3(b) 的反馈控制系统对区间 $[-0.25,0.25]$ 内每个实数 $\delta$ 都稳定的 $k$ 的条件。

   （4）设 $n$ 为自然数，$a_0,a_1,\ldots,a_{n-1}$ 为非负实数，并要求

   $$
   \frac{1}
   {s^n+a_{n-1}s^{n-1}+\cdots+a_1s+a_0}
   $$

   具有图 2 所示的矢量轨迹。在所有满足条件的传递函数中，求阶数 $n$ 最小者。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p2.png" width="450" alt=""/>
   </figure>

## **Kai**
### 問題1

(1) 初期値を $0$ としてラプラス変換すると

$$P(s)=\frac1{s^2-5s+4},\qquad F(s)=\frac1{as+1}.$$

閉ループ伝達関数は

$$G_{yr}(s)=\frac{K(s)P(s)}{1+K(s)P(s)F(s)}=\frac{(K_Ds^2+K_Ps+K_I)(as+1)}{s(as+1)(s^2-5s+4)+K_Ds^2+K_Ps+K_I}.$$

(2) 条件を代入し、単位ステップ入力に対して

$$Y(s)=\frac{10s+2}{s(s+2)(s+3)}=\frac1{3s}+\frac9{s+2}-\frac{28}{3(s+3)}.$$

従って $\boxed{y(t)=1/3+9e^{-2t}-(28/3)e^{-3t}}$ ($t\geq0$)。

(3) 特性多項式は

$$q(s)=as^4+(1-5a)s^3+(4a-5+K_D)s^2+(4+K_P)s+1.$$

$a>0$ の場合、$B=1-5a$、$C=4a-5+K_D$、$D=4+K_P$ とおく。Hurwitz 条件は

$$a>0,\quad B>0,\quad C>0,\quad D>0,\quad BCD-B^2-aD^2>0.$$

最後の不等式から $BC-aD>0$ も従うため、これらが必要十分である。

$a=0$ の場合は三次式となり、条件は

$$K_D>5,\qquad K_P>-4,\qquad (K_D-5)(K_P+4)>1.$$

$a<0$ では $q(0)=1$、$q(s)\to-\infty$ ($s\to+\infty$) より正の実根が存在し、安定化できない。

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p2_s.jpg" width="700" alt="Nyquist stability and minimum-order transfer-function derivation"/>
</figure>
