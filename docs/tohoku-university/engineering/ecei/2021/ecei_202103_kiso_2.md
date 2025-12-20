---
sidebar_label: "2021年2・3月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2021年2・3月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
Fig.2 のようにインダクタ $L$, 抵抗 $R$, コンデンサ $C$ の直列回路がある。コンデンサ $C$ が充電され、その電圧は $E_0$ である。時刻 $t = 0$ でスイッチ $S$ を閉じた。$t \geq 0$ の範囲で以下の問に答えよ。

(1) コンデンサ $C$ の電荷 $q(t)$ に関する回路の基本式を微分方程式として記述せよ。

(2) 問(1)の微分方程式で電荷の特解を $q_s(t) = e^{st}$ と仮定して $s$ に関する特性方程式を記述し、その根を求めよ。

(3) 問(2)の特性方程式で $R^2 = 4L/C$ の場合、時刻 $t$ における電荷の一般解 $q(t)$ は式(2A)のように導出できる。このとき電流 $i(t)$ を求め、電流波形の概形(極値を含む)を描け。

$$
\begin{align}
q(t) = CE_0e^{-\frac{R}{2L}t}(1 + \frac{Rt}{2L}) \tag{2A}
\end{align}
$$

(4) 問(3)の場合に、$0 \leq t \leq \infty$ の間に抵抗 $R$ で消費されるエネルギーを求め、このエネルギーが時刻 $t = 0$ でコンデンサ $C$ に蓄えられていた静電エネルギーと等しいことを示せ。必要であれば式(2B)を使用せよ。

$$
\begin{align}
\int_0^{\infty}e^{-at}t^{n - 1}dt = \frac{(n - 1)!}{a^n} \tag{2B}
\end{align}
$$

ただし、$a$ は実数、$n$ は整数とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202103_kiso_2_electrical_circuit.png" width="400"/>
</figure>

## **Kai** 
### (1) - (3)
略

### (4)
S域解答一步到位：

$$
I = \frac{\frac{E_0}{s}}{sL + R + \frac{1}{sC}} = \frac{E_0}{L} \cdot \frac{1}{s^2 + \frac{R}{L}s + \frac{1}{LC}}
$$

$$
\Delta = \frac{R^2}{L^2} - \frac{4}{LC} = 0
$$

$$
s_0 = \frac{-R}{2L}
$$

$$
I = \frac{E_0}{L} \cdot \frac{1}{(s - s_0)^2}
$$

$$
I(t) = \frac{E_0}{L} \cdot te^{s_0 t}
$$

$$
\begin{aligned}
W &= \int_0^{\infty} I^2R \cdot dt = \frac{E_0^2R}{L^2} \cdot \int_0^{\infty} t^2 e^{-(-2s_0)t}dt = \frac{E_0^2R}{L^2} \cdot L(t^2)\bigg|_{s \rightarrow 2s_0} = \frac{E_0^2R}{L^2} \cdot \frac{2}{(-2s_0)^3} \\
&= \frac{E_0^2R}{L^2} \cdot \frac{2}{(-2s_0)^3} = \frac{E_0^2R}{4L^2} \cdot \bigg(\frac{2L}{R}\bigg)^3 = \frac{2E_0^2L}{R^2}
\end{aligned}
$$

代入：

$$
R^2 = \frac{4L}{C}
$$

$$
W = \frac{1}{2}CE_0^2
$$