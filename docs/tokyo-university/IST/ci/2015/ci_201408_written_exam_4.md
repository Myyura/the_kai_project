---
sidebar_label: '2014年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Computer-Science.Computer-Architecture.Superscalar-Execution
  - Computer-Science.Security.Cross-Site-Scripting
  - Data-Science-Artificial-Intelligence.Machine-Learning.Support-Vector-Machine
  - Engineering.Mechanics-of-Materials.Strain-Gauge
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Computer-Science.Programming.Just-in-Time-Compilation
  - Electrical-Electronic.Digital-Logic.Pulse-Width-Modulation
  - Computer-Science.Graphics.Optical-Flow
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065621id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2014-8-exam.pdf).

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) スーパースカラ
2) クロスサイトスクリプティング
3) サポートベクターマシン
4) ひずみゲージ
5) 半加算器
6) 実行時コンパイラ (Just-in-time compiler)
7) PWM (pulse width modulation) 制御
8) オプティカルフロー

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Superscalar
2) Cross-site scripting
3) Support Vector Machine
4) Strain gauge
5) Half adder
6) Just-in-time compiler
7) PWM (pulse width modulation) control
8) Optical flow

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 超标量处理器。
2. 跨站脚本攻击。
3. 支持向量机。
4. 应变片。
5. 半加器。
6. 即时编译器（JIT）。
7. PWM（脉宽调制）控制。
8. 光流。

## **Kai**

### (1) Superscalar

A superscalar processor can issue and execute multiple instructions from one instruction stream per clock cycle using multiple functional units. It detects data and resource dependencies, and may use register renaming, speculative execution and out-of-order scheduling while preserving the architecture's required behavior. Independent operations can overlap, but dependencies, branch mispredictions, memory stalls and limited issue bandwidth reduce achieved throughput. Superscalar execution is distinct from SIMD, which applies one instruction to multiple data elements, although one processor can support both.

### (2) Cross-site scripting

XSS occurs when attacker-controlled content is interpreted as active browser code in a site's context, for example through unsafe insertion of untrusted data into HTML or a DOM script sink. Stored, reflected and DOM-based paths describe different ways that content reaches execution. Consequences include reading accessible application data or performing actions with the victim's session. Prevention includes context-appropriate output encoding, safe DOM APIs such as `textContent`, and a suitable HTML sanitizer where rich HTML is intentionally permitted. Content Security Policy is an additional defense, not a replacement for safe data handling; `HttpOnly` limits direct cookie reading but does not prevent all actions by injected code. See the [OWASP prevention guidance](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

### (3) Support vector machine

For a separable binary dataset, a hard-margin SVM chooses a separating hyperplane with maximum geometric margin. A soft-margin formulation minimizes $\tfrac12\|w\|^2+C\sum_i\xi_i$ subject to $y_i(w^Tx_i+b)\ge1-\xi_i$ and $\xi_i\ge0$, balancing margin and violations. Support vectors have nonzero dual coefficients and determine the decision function; in the soft-margin case they can lie inside the margin or be misclassified, so they are not simply “only the closest training points.” Kernels replace feature-space inner products to obtain nonlinear boundaries. Regularization and kernel parameters affect generalization, as described in the [scikit-learn SVM documentation](https://scikit-learn.org/stable/modules/svm.html).

### (4) Strain gauge

A resistive strain gauge is bonded to a surface so that deformation changes its length, cross section and electrical resistance. For small strain $\varepsilon=\Delta L/L$, its gauge factor $G_F$ relates the measured change by $\Delta R/R\approx G_F\varepsilon$. A Wheatstone bridge and instrumentation amplifier convert this small resistance change into a voltage; a single-active-gauge quarter bridge has small-signal output magnitude approximately $V_{\mathrm{exc}}G_F\varepsilon/4$, with sign depending on wiring. Calibration, temperature compensation, lead resistance and adhesive strain transfer affect accuracy. Gauges are used in load cells or bending sensors; converting strain to force requires the structure's mechanical model or calibration.

### (5) Half adder

A half adder adds two input bits $A,B$, producing sum $S=A\oplus B$ and carry $C=AB$, so $A+B=S+2C$. Its truth table maps $00,01,10,11$ to $(S,C)=(0,0),(1,0),(1,0),(0,1)$, respectively. Thus one XOR and one AND gate implement it. A half adder has no input carry; two half adders and an OR of their carry outputs form a full adder with a third input carry.

### (6) Just-in-time compiler

A JIT compiler translates bytecode or an intermediate representation into native code during execution. Runtime profiles can identify hot code and enable specialization, inlining or other optimizations; speculative assumptions may require guards and deoptimization if they cease to hold. Benefits depend on execution frequency and available optimization information, while costs include warm-up time, compilation work and code-cache memory. Managed runtimes such as Java and .NET commonly use JIT techniques, sometimes alongside interpretation or ahead-of-time compilation; JIT is not automatically faster for every workload.

### (7) PWM control

Pulse-width modulation varies the on-time of a switched output within a fixed or controlled period. The duty ratio $D=t_{\mathrm{on}}/T$ sets the average command; an ideal voltage switching between 0 and $V$ has average $DV$. A counter compared with a duty threshold can generate the waveform digitally. With sufficiently fast switching relative to the load response, PWM controls LED brightness, heater power or motor drive with efficient on/off switches. Finite timer resolution, switching losses, filtering, electrical dynamics and minimum pulse width limit performance; the actual mechanical response or perceived brightness need not be exactly linear in duty for every load.

### (8) Optical flow

Optical flow is the apparent two-dimensional velocity field of image brightness patterns between frames. Assuming brightness constancy and small motion, differentiating $I(x+u\,dt,y+v\,dt,t+dt)=I(x,y,t)$ gives $I_xu+I_yv+I_t=0$. This is one equation for two velocity components, creating the aperture ambiguity. Lucas–Kanade adds approximately constant motion over a local window and solves a least-squares system; a sufficiently textured window is needed for an invertible structure tensor. Image pyramids extend the method to larger displacements, while occlusions, lighting changes and blur can violate the assumptions. Image motion is not by itself a complete three-dimensional scene velocity. See the [OpenCV optical-flow tutorial](https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html).
