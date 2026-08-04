---
sidebar_label: 2022年8月実施 専門科目 制御工学
tags:
  - Kyoto-University
  - Electrical-Electronic.Control-Theory.Linearization
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Control-Theory.Step-Response
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Lead-Compensation
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 専門科目 制御工学

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/68844f5f0000000022032dbc?xsec_token=ABJ6e6OUxI1XWfgsOiU5PPpATJBVnNjWzgQ2c9U7EtPjg=)

## **Description**
### 問題1
以下の設問に答えよ。

**(1)** 入力 $u(t)$ と出力 $y(t)$ の関係が微分方程式  

$$
\frac{d^2 y(t)}{dt^2} + 2\sin y(t) = u(t)
$$

で記述されるシステムにおいて、入力と出力がそれぞれ一定値 $u(t) = \bar{u}, \; y(t) = \bar{y}$ となる平衡状態を考える。
$\bar{y} = \pi/2$ のとき、平衡状態からの入力と出力の微小変化をそれぞれ $\delta u(t), \delta y(t)$ としてこの微分方程式を線形化し、$\delta u$ から $\delta y$ への伝達関数を求めよ。

**(2)** 伝達関数が  

$$
\frac{1}{(s+1)(s^2+2s+5)}
$$

であるシステムのステップ応答を求めよ。

**(3)** 図1のフィードバック制御系において、  

$$
P(s) = \frac{1}{s^2 + as + 2}, \quad K(s) = b + \frac{c}{s}
$$

とする。ここで $a, b, c$ は定数パラメータであり、$c \neq 0$ とする。  
$2 \leq a \leq 5$ を満たすすべての $a$ に対してフィードバック制御系が安定となる  
$b, c$ の条件を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p1.png" width="300" alt=""/>
</figure>

**(4)** 設問(3)のフィードバック制御系において $a=1$ とする。単位ステップ入力 $r(t)=1$ に対する出力 $y(t)$ が $\lim_{t\to\infty} y(t) = 1$ と $\left| \frac{d^2 y}{dt^2}(0) \right| \leq 1$ を満たす  
$b, c$ の条件を求めよ。

---

### 問題2
位相進み補償

$$
C(s) = k \frac{Ts+1}{\alpha Ts+1}
$$

は特定の周波数帯域で位相を進める働きをする補償器である。ただし、$k, T$ は正の定数、$\alpha$ は $1$ 未満の正の定数である。このとき、次の命題が成り立つ。

- **命題1** 周波数伝達関数 $C(j\omega)$ の位相の最大値は  $\arctan \frac{1-\alpha}{2\sqrt{\alpha}}$ であり、この最大値は角周波数 $\omega_m = \frac{1}{\sqrt{\alpha}T}$ に対して得られる。

以下の設問に答えよ。

**(1)** 角周波数 $\omega_m = \frac{1}{\sqrt{\alpha}T}$ における周波数伝達関数 $C(j\omega)$ のゲインを求めよ。

**(2)** $k=1, T=2, \alpha=0.1$ のときの $C(s)$ のボード線図の概形を描け。  
この際、軸上に主要な値を書き入れよ。ただし、ゲイン線図は折線近似でよい。また、近似値 $\arctan(0.9\sqrt{10}/2) \approx 55^\circ$ を用いよ。

**(3)** 図2のような伝達関数 $P(s)$ と $K(s)$ のフィードバック制御系について考える。$K(s)=1$ の場合の位相交差周波数が $\omega_{pc}=3$、ゲイン余裕が $GM=3 \,\mathrm{dB}$ であるとする。ここで $\omega_m=\omega_{pc}$ を満たす位相進み補償 $C(s)$ によって、$K(s) = C(s)$ の場合の開ループ系の周波数伝達関数 $P(j\omega)K(j\omega)$ が次の2つの条件を満たすようにしたい。

- (a) 角周波数 $\omega_{pc}$ における位相が $-135^\circ$ である。  
- (b) 角周波数 $\omega_{pc}$ におけるゲインが $0$ dB である。  

このような定数 $k, T, \alpha$ を求めよ。なお、近似値 $2 \approx 6 \,\mathrm{dB}$ を用いよ。

**(4)** 命題1を証明せよ。ただし、次の公式を用いてよい。

$$
\tan(x-y) = \frac{\tan x - \tan y}{1+\tan x \tan y}
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p2.png" width="300" alt=""/>
</figure>

### 题目描述

1. 回答下列问题。

   （1）某系统的输入 $u(t)$ 与输出 $y(t)$ 满足

   $$
   \frac{d^2y(t)}{dt^2}+2\sin y(t)=u(t).
   $$

   考虑输入、输出分别取常值 $u(t)=\bar u$、$y(t)=\bar y$ 的平衡状态。当 $\bar y=\pi/2$ 时，令相对平衡状态的微小输入、输出变化分别为 $\delta u(t),\delta y(t)$。线性化该微分方程，并求从 $\delta u$ 到 $\delta y$ 的传递函数。

   （2）求传递函数

   $$
   \frac1{(s+1)(s^2+2s+5)}
   $$

   所对应系统的阶跃响应。

   （3）在图 1 的反馈控制系统中，

   $$
   P(s)=\frac1{s^2+as+2},\qquad
   K(s)=b+\frac cs,
   $$

   其中 $a,b,c$ 为常数参数且 $c\ne0$。求 $b,c$ 的条件，使系统对满足 $2\leq a\leq5$ 的每一个 $a$ 都稳定。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p1.png" width="300" alt=""/>
   </figure>

   （4）对第（3）问的反馈系统取 $a=1$。求 $b,c$ 的条件，使单位阶跃输入 $r(t)=1$ 的输出 $y(t)$ 同时满足

   $$
   \lim_{t\to\infty}y(t)=1,\qquad
   \left|\frac{d^2y}{dt^2}(0)\right|\leq1.
   $$

2. 相位超前补偿器

   $$
   C(s)=k\frac{Ts+1}{\alpha Ts+1}
   $$

   在特定频带内提供相位超前，其中 $k,T>0$，$0<\alpha<1$。已知以下命题：

   > 频率响应 $C(j\omega)$ 的最大相位为
   > $$
   > \arctan\frac{1-\alpha}{2\sqrt\alpha},
   > $$
   > 且在角频率
   > $$
   > \omega_m=\frac1{\sqrt\alpha T}
   > $$
   > 处取得。

   （1）求 $\omega=\omega_m=\frac1{\sqrt\alpha T}$ 时 $C(j\omega)$ 的增益。

   （2）当 $k=1,T=2,\alpha=0.1$ 时，画出 $C(s)$ 的 Bode 图概形，并在坐标轴上标出主要数值。增益图可采用折线近似，并可使用

   $$
   \arctan(0.9\sqrt{10}/2)\approx55^\circ.
   $$

   （3）考虑图 2 所示由 $P(s),K(s)$ 构成的反馈控制系统。当 $K(s)=1$ 时，相位交叉频率为 $\omega_{pc}=3$，增益裕度为 $GM=3\,\mathrm{dB}$。现采用满足 $\omega_m=\omega_{pc}$ 的相位超前补偿器 $C(s)$，并令 $K(s)=C(s)$，要求开环频率响应 $P(j\omega)K(j\omega)$ 同时满足：

   - 在 $\omega_{pc}$ 处的相位为 $-135^\circ$；
   - 在 $\omega_{pc}$ 处的增益为 $0\,\mathrm{dB}$。

   求相应的 $k,T,\alpha$。可使用近似 $2\approx6\,\mathrm{dB}$。

   （4）证明上述关于最大相位及其取得频率的命题。可使用

   $$
   \tan(x-y)=
   \frac{\tan x-\tan y}{1+\tan x\tan y}.
   $$

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p2.png" width="300" alt=""/>
   </figure>

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p1_s.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_control_theory_p2_s.jpg" width="700" alt=""/>
</figure>
