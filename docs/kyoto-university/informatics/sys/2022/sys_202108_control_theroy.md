---
sidebar_label: 2021年8月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Proportional-Integral-Derivative-and-Integral-Proportional-Derivative-Control
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---
# 京都大学 情報学研究科 システム科学専攻 2021年8月実施 専門科目 制御工学

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/6882d45e000000002001afc7?xsec_token=ABv7C785zMbXjgoCBH6HH8Ond0K0iL_I33XXSF6B6rn-A=)

## **Description**
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

$P(s)$ は図2のようなベクトル軌跡を持つ伝達関数であり、それぞれの極は $0$（重複はない）であるが、実部が負である。図2の破線はベクトル軌跡の漸近線を表す。
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

2. 传递函数 $P(s)$ 具有图 2 所示的矢量轨迹，虚线表示其渐近线。题面给出的极点条件为各极点取 $0$、没有重合，并且实部为负。令 $k$ 为正常数。

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
###

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

###

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>
