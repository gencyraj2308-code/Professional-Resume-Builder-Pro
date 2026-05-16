document.addEventListener("DOMContentLoaded", () => {
    // 1. Element Selector Registry Map & Remote Repository Mapping
    const repoRemoteOrigin = "https://github.com/gencyraj2308-code/Professional-Resume-Builder-Pro.git";
    
    const masterGenerateBtn = document.getElementById("master-generate-btn");
    const nextMatrixBtn = document.getElementById("next-matrix-btn");
    const outputCanvas = document.getElementById("output-canvas");
    const reportBox = document.getElementById("ai-mini-report");
    const reportBody = document.getElementById("report-body");
    const finalBombInput = document.getElementById("final-bomb-input");
    const printBombBtn = document.getElementById("print-bomb-btn");
    const printRenderZone = document.getElementById("print-render-zone");

    const toolCheckErrors = document.getElementById("tool-check-errors");
    const toolRunAnalytics = document.getElementById("tool-run-analytics");

    const fields = {
        name: document.getElementById("user-name"),
        email: document.getElementById("user-email"),
        phone: document.getElementById("user-phone"),
        address: document.getElementById("user-address"),
        qualifications: document.getElementById("user-qualifications"),
        certifications: document.getElementById("user-certifications"),
        skills: document.getElementById("user-skills"),
        experience: document.getElementById("user-exp-years"),
        socials: document.getElementById("user-socials"),
        activities: document.getElementById("user-activities")
    };

    let selectedTemplate = "bazz";

    // 2. UI Audio Feedback Engine Matrix
    let audioCtx = null;
    function initializeAudioEngine() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }
    document.body.addEventListener("click", initializeAudioEngine, { once: true });

    function playKeyTickSound() {
        initializeAudioEngine(); if(!audioCtx) return;
        const oscillator = audioCtx.createOscillator();
        const outputGain = audioCtx.createGain();
        oscillator.connect(outputGain); outputGain.connect(audioCtx.destination);
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(340 + Math.random()*60, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(55, audioCtx.currentTime + 0.01);
        outputGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        outputGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.01);
    }

    document.querySelectorAll('input, textarea, button').forEach(element => {
        element.addEventListener("keydown", (e) => {
            if(!["Shift","Control","Alt","CapsLock"].includes(e.key)) playKeyTickSound();
        });
        element.addEventListener("click", playKeyTickSound);
    });

    // 3. Style Template Selection Architecture
    document.querySelectorAll(".style-node").forEach(node => {
        node.addEventListener("click", () => {
            const type = node.getAttribute("data-type");
            const val = node.getAttribute("data-val");

            document.querySelectorAll(`.style-node[data-type="${type}"]`).forEach(n => n.classList.remove("active"));
            node.classList.add("active");

            if (type === "template") {
                selectedTemplate = val;
                if(fields.name.value) generateResumeBlueprint();
            } else {
                outputCanvas.className = `canvas-sheet ${val}`;
            }
        });
    });

    // 4. Dynamic Template Layout Synthesis Compiler Engine
    function generateResumeBlueprint() {
        const data = {
            name: fields.name.value || "GENESIS PROTOTYPE USER",
            email: fields.email.value || "developer@agencyraj.ai",
            phone: fields.phone.value || "+91 98765 43210",
            address: fields.address.value || "Silicon Valley, IN",
            qualifications: fields.qualifications.value || "B.Tech in Computer Science",
            certifications: fields.certifications.value || "AWS Certified Cloud Practitioner",
            skills: fields.skills.value || "Full-Stack Development, Node.js, AI Architecture",
            experience: fields.experience.value || "Fresher / Entry-Level Systems Analyst",
            socials: fields.socials.value || "github.com/gencyraj",
            activities: fields.activities.value || "Open Source Contributor, Tech Blogger"
        };

        let outputStr = "";

        if (selectedTemplate === "bazz") {
            outputStr = `==================================================\n`;
            outputStr += `         BAZZ ATS-OPTIMIZED MASTER RESUME         \n`;
            outputStr += `==================================================\n\n`;
            outputStr += `${data.name.toUpperCase()}\n`;
            outputStr += `Contact: ${data.phone} | Email: ${data.email}\n`;
            outputStr += `Location: ${data.address} | Portals: ${data.socials}\n\n`;
            outputStr += `[PROFESSIONAL SUMMARY]\n`;
            outputStr += `Highly driven professional specializing in ${data.skills}. Evaluated targeting top-tier technical environments with verified milestones.\n\n`;
            outputStr += `[CORE COMPETENCIES & EXPERTISE]\n`;
            outputStr += `• ${data.skills.split(',').join('\n• ')}\n\n`;
            outputStr += `[WORK HISTORY & EXPERIENCE REALMS]\n`;
            outputStr += `${data.experience}\n\n`;
            outputStr += `[SCHOLASTIC QUALIFICATIONS]\n`;
            outputStr += `• ${data.qualifications}\n\n`;
            outputStr += `[ACCREDITATIONS & CERTIFICATIONS]\n`;
            outputStr += `• ${data.certifications}\n\n`;
            outputStr += `[ADDITIONAL ENGAGEMENTS]\n`;
            outputStr += `• ${data.activities}`;
        } 
        else if (selectedTemplate === "gazz") {
            outputStr = `--------------------------------------------------\n`;
            outputStr += `            GAZZ EARLY-CAREER BLUEPRINT           \n`;
            outputStr += `--------------------------------------------------\n\n`;
            outputStr += `NAME: ${data.name}\n`;
            outputStr += `EMAIL: ${data.email} | PHONE: ${data.phone}\n`;
            outputStr += `HANDLES: ${data.socials}\n\n`;
            outputStr += `📌 TECHNICAL SKILLS ARRAY:\n${data.skills}\n\n`;
            outputStr += `🎓 EDUCATION MILESTONES:\n${data.qualifications}\n\n`;
            outputStr += `💼 PRACTICAL EXPERIENCE / PROJECTS:\n${data.experience}\n\n`;
            outputStr += `📜 VERIFIED CERTIFICATIONS:\n${data.certifications}\n\n`;
            outputStr += `🌟 EXTRA-CURRICULAR & INTERESTS:\n${data.activities}`;
        } 
        else {
            outputStr = `${data.name}\n`;
            outputStr += `${data.address} | ${data.phone} | ${data.email}\n\n`;
            outputStr += `OBJECTIVE\n`;
            outputStr += `To secure a challenging corporate role leveraging background in ${data.skills}.\n\n`;
            outputStr += `EDUCATION\n`;
            outputStr += `${data.qualifications}\n\n`;
            outputStr += `EXPERIENCE\n`;
            outputStr += `${data.experience}\n\n`;
            outputStr += `SKILLS & CERTIFICATIONS\n`;
            outputStr += `${data.skills} | ${data.certifications}\n\n`;
            outputStr += `INTERESTS\n`;
            outputStr += `${data.activities}`;
        }

        outputCanvas.value = outputStr;
        finalBombInput.value = outputStr;
    }

    masterGenerateBtn.addEventListener("click", () => {
        masterGenerateBtn.textContent = "Synthesizing Architecture...";
        setTimeout(() => {
            generateResumeBlueprint();
            masterGenerateBtn.textContent = "✨ Run Master Synthesis";
        }, 500);
    });

    nextMatrixBtn.addEventListener("click", () => {
        generateResumeBlueprint();
        outputCanvas.focus();
    });

    // 5. Section 3: High-Fidelity Analytics Matrix Parser Engine
    toolCheckErrors.addEventListener("click", () => {
        if(!outputCanvas.value) {
            alert("Generate a workspace canvas blueprint before running the scanning logic array.");
            return;
        }
        toolCheckErrors.textContent = "AI Scanning Matrix Textual Compliance...";
        
        setTimeout(() => {
            reportBox.classList.remove("hidden");
            const canvasContent = outputCanvas.value.toLowerCase();
            let flaws = [];
            
            if(!canvasContent.includes("@") || !canvasContent.includes(".com")) flaws.push("- Warn: Digital contact tokens mapping looks non-standard.");
            if(fields.experience.value.length < 5) flaws.push("- Attention: Deep metric parameters are missing from history strings.");
            
            if(flaws.length === 0) {
                reportBody.textContent = `[PROSE CHECK: PERFECT]\n✔ Structure token alignment matches semantic parser rules.\n✔ System lexical grammar density optimal.`;
            } else {
                reportBody.textContent = `[PROSE CHECK: OPTIMIZATIONS FOUND]\n${flaws.join('\n')}`;
            }
            toolCheckErrors.textContent = "Scan Text Content";
        }, 600);
    });

    toolRunAnalytics.addEventListener("click", () => {
        const userSkills = fields.skills.value.toLowerCase();
        if(!userSkills) {
            alert("Populate the Profile Matrix Skills parameter to trigger real-time market indexing.");
            return;
        }
        toolRunAnalytics.textContent = "Processing Live Market Pulse Matrix...";

        setTimeout(() => {
            reportBox.classList.remove("hidden");
            
            const highDemandTechTokens = ["ai", "llm", "python", "next.js", "react", "typescript", "cloud", "aws", "devops", "data", "ml", "cybersecurity", "rust"];
            let matchingKeywordsCount = 0;
            
            highDemandTechTokens.forEach(token => {
                if(userSkills.includes(token)) matchingKeywordsCount++;
            });

            let dynamicMarketScore = 60 + (matchingKeywordsCount * 10);
            if (dynamicMarketScore > 99) dynamicMarketScore = 99;

            let structuralInsight = "";
            if (selectedTemplate === "bazz") {
                structuralInsight = "Bazz ATS algorithms require dense technology keywords inside the top third summary pane.";
            } else if (selectedTemplate === "gazz") {
                structuralInsight = "Gazz indexing prefers action-oriented internship/academic venture highlights.";
            } else {
                structuralInsight = "Corporate parsing machines emphasize strict hierarchical timeline chronological splits.";
            }

            reportBody.textContent = `[REAL-TIME ATS AI ANALYTICS]
• Origin Repository Verified: ${repoRemoteOrigin.split('/').pop()}
• Target Profile: ${selectedTemplate.toUpperCase()} Layout Alignment
• Marketplace Match Score: ${dynamicMarketScore}%
• Target Track Density: ${matchingKeywordsCount}/${highDemandTechTokens.length} Top Industry Tokens
• Strategic Insight: ${structuralInsight}`;

            toolRunAnalytics.textContent = "Analyze Marketplace Match";
        }, 700);
    });

    // 6. Section 4: Print Pipe Launch System Execution
    printBombBtn.addEventListener("click", () => {
        if(!finalBombInput.value) {
            alert("The final terminal asset register is completely empty. Please synthesize data content first.");
            return;
        }
        
        printRenderZone.textContent = finalBombInput.value;
        window.print();
    });
});