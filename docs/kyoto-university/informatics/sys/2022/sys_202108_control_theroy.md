---
sidebar_label: "2021年8月実施 専門科目 制御工学"
tags:
  - Kyoto-University
  - Control-Theory
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

## **Kai**
###

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

###

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>