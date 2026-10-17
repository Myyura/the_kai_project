---
sidebar_label: 2016年8月実施 専門科目 問題1 電気工学（周波数応答・制御）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 専門科目 問題1 電気工学（周波数応答・制御）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

Fig. 1(a)に示す電気回路を考える．この回路の伝達関数を $G(s)$ とする．ここで，$v_1(t)$ と $v_2(t)$ は，それぞれこの電気回路の入力電圧と出力電圧である．次の問に答えよ．

![Fig. 1(a)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2017/ecei_201608_senmon_1_figure_1.png)

(a) 伝達関数 $G(s)$ を求めよ．

(b) $R_1=1\ \Omega,\ R_2=3\ \Omega,\ C=0.5\ \mathrm F,\ L=0.5\ \mathrm H$ のとき，伝達関数 $G(s)$ の単位ステップ応答を求め，主な特徴がわかるようにその波形を描け．必要があれば $e^{-1}\approx0.4$ を用いよ．ここで，$e$ は自然対数の底である．

### (2)

ある電気回路の伝達関数が

$$
G(s)=\frac1{(s+1)(s+2)}
$$

で与えられる．次の問に答えよ．

(a) 周波数伝達関数 $G(j\omega)$ のゲイン $|G(j\omega)|$ と位相 $\angle G(j\omega)$ を求めよ．

(b) 周波数伝達関数 $G(j\omega)$ のナイキスト線図の概形を描け．

### (3)

Fig. 1(b)に示すフィードバック制御系を考える．$r(t)$ と $y(t)$ は，それぞれ目標値と制御量である．次の問に答えよ．

![Fig. 1(b)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2017/ecei_201608_senmon_1_figure_2.png)

(a) このフィードバック制御系の開ループ伝達関数 $G(s)$ を求めよ．

(b) このフィードバック制御系が安定になるための $K$ の範囲を求めよ．

#### 题目描述

**(1)** 考虑上方 Fig. 1(a) 的电路，设其传递函数为 $G(s)$。其中 $v_1(t),v_2(t)$ 分别是该电路的输入电压和输出电压。回答下列问题。

(a) 求传递函数 $G(s)$。

(b) 当 $R_1=1\ \Omega,\ R_2=3\ \Omega,\ C=0.5\ \mathrm F,\ L=0.5\ \mathrm H$ 时，求传递函数 $G(s)$ 的单位阶跃响应，并画出能体现主要特征的波形。如有需要，可使用 $e^{-1}\approx0.4$，其中 $e$ 为自然对数的底。

**(2)** 某电路的传递函数为

$$
G(s)=\frac1{(s+1)(s+2)}.
$$

回答下列问题。

(a) 求频率传递函数 $G(j\omega)$ 的增益 $|G(j\omega)|$ 和相位 $\angle G(j\omega)$。

(b) 画出频率传递函数 $G(j\omega)$ 的奈奎斯特图的大致形状。

**(3)** 考虑上方 Fig. 1(b) 的反馈控制系统。$r(t),y(t)$ 分别为目标值和被控量。回答下列问题。

(a) 求该反馈控制系统的开环传递函数 $G(s)$。

(b) 求使该反馈控制系统稳定的 $K$ 的范围。

## **Kai**

### (1)

#### (a)

电容电流为 $sCV_2$，节点电压为 $U=(1+sCR_2)V_2$。电感电流为 $U/R_1+sCV_2$，故

$$
V_1=U+sL(U/R_1+sCV_2),
$$

从而

$$
\boxed{G(s)=\frac{R_1}{LCR_2s^2+[L+CR_1R_2]s+R_1}}.
$$

#### (b)

代入参数得 $G(s)=4/[(s+2)(3s+2)]$。零初值的单位阶跃响应为

$$
\boxed{v_2(t)=1+\frac12e^{-2t}-\frac32e^{-2t/3}\quad(t\ge0)}.
$$

它从 $0$ 以零斜率出发，导数 $v_2'=e^{-2t/3}-e^{-2t}>0$，因此单调上升至 $1$、无超调。拐点在 $t=3\ln3/4$。

![单位阶跃响应](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2017/ecei_201608_step.svg)


### (2)

$$
\boxed{\begin{gathered}|G(i\omega)|=\frac1{\sqrt{(1+\omega^2)(4+\omega^2)}},\\
\arg G(i\omega)=-\arctan\omega-\arctan\frac\omega2\quad(\omega\ge0).\end{gathered}}
$$

其实部、虚部为

$$
\Re G=\frac{2-\omega^2}{(1+\omega^2)(4+\omega^2)},\qquad
\Im G=-\frac{3\omega}{(1+\omega^2)(4+\omega^2)}.
$$

正频率支从 $(1/2,0)$ 出发进入下半平面，在 $\omega=\sqrt2$ 处经过 $(0,-1/(3\sqrt2))$，再从第三象限趋于原点。负频率支关于实轴对称。

![奈奎斯特曲线](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2017/ecei_201608_senmon_1_nyquist.svg)

### (3)

$$
\boxed{G_{open}(s)=\frac K{(s+1)(s+2)}.}
$$

闭环特征多项式为 $s^2+3s+(2+K)$，二阶 Hurwitz 条件给出

$$
\boxed{K>-2.}
$$

若将 $K$ 限定为正增益，则所有 $K>0$ 均稳定。

## **Reference**

- [公式問題（PDF）](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201608senmon.pdf#page=1)
