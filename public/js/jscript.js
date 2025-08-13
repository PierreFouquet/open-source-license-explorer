document.addEventListener('DOMContentLoaded', () => {

    const licenseData = [
        {
            id: 'gpl3',
            name: 'GPLv3',
            fullName: 'GNU General Public License v3.0',
            type: 'Strong Copyleft',
            color: 'bg-red-100 text-red-800',
            summary: 'Requires derivative works to be licensed under GPLv3. Strongest "share-alike" protections.',
            allowsProprietary: false,
            hasPatentGrant: true,
            copyleft: 'strong',
            permissivenessScore: 2,
            details: {
                permissions: 'You can copy, modify, and distribute the software for commercial and private purposes.',
                conditions: 'Any distributed modifications or derivative works MUST be licensed under GPLv3 (viral nature). You must include the license text, copyright notices, and state changes.',
                monetization: 'You can charge for copies of the program or for support/warranty services, but you cannot charge a fee for the license itself.',
                attribution: 'Required. Must include copyright notices and state that the work is a derivative.',
                gplCompatibility: 'Compatible with AGPLv3. Generally incompatible with other licenses if combined into a single executable.'
            }
        },
        {
            id: 'mit',
            name: 'MIT',
            fullName: 'MIT License',
            type: 'Permissive',
            color: 'bg-green-100 text-green-800',
            summary: 'Extremely permissive with minimal restrictions. Ideal for wide adoption.',
            allowsProprietary: true,
            hasPatentGrant: false,
            copyleft: 'none',
            permissivenessScore: 9,
            details: {
                permissions: 'You can use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software.',
                conditions: 'You must include the original copyright notice and the full license text in all copies.',
                monetization: 'Fully permitted. You can sell both the original software and any derivative works.',
                attribution: 'Required. Fulfilled by including the copyright and license notice.',
                gplCompatibility: 'Yes, highly compatible due to its minimal restrictions.'
            }
        },
        {
            id: 'apache2',
            name: 'Apache 2.0',
            fullName: 'Apache License 2.0',
            type: 'Permissive',
            color: 'bg-green-100 text-green-800',
            summary: 'Permissive license with an explicit patent grant and retaliation clause.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'none',
            permissivenessScore: 8,
            details: {
                permissions: 'Grants a broad copyright license for commercial use, alteration, distribution, and sublicensing.',
                conditions: 'You must include original notices and state any significant changes made to the code. You do not have to open-source your modifications.',
                monetization: 'Fully permitted. You can include the code in proprietary software for sale and charge for support/warranty.',
                attribution: 'Required. Retain notices, mark changes, and include the NOTICE file if present.',
                gplCompatibility: 'Yes.'
            }
        },
        {
            id: 'mspl',
            name: 'Ms-PL',
            fullName: 'Microsoft Public License',
            type: 'Permissive',
            color: 'bg-green-100 text-green-800',
            summary: 'Permissive with patent grant, but requires source distributions to remain under Ms-PL.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'none',
            permissivenessScore: 7,
            details: {
                permissions: 'Grants broad copyright and patent licenses.',
                conditions: 'If you distribute any part in source code form, it must be under Ms-PL. Compiled code can be under a compliant license. All original notices must be retained.',
                monetization: 'Permitted. The patent grant allows you to sell contributions.',
                attribution: 'Required. Retain all copyright, patent, and trademark notices.',
                gplCompatibility: 'Compatible for binaries, but source code must remain under Ms-PL, creating complexity.'
            }
        },
        {
            id: 'bsd3',
            name: 'BSD 3-Clause',
            fullName: 'BSD 3-Clause License',
            type: 'Permissive',
            color: 'bg-green-100 text-green-800',
            summary: 'Highly permissive, with a clause preventing endorsement by the original author.',
            allowsProprietary: true,
            hasPatentGrant: false,
            copyleft: 'none',
            permissivenessScore: 8.5,
            details: {
                permissions: 'Unlimited redistribution and use for any purpose, including proprietary products.',
                conditions: 'You must retain the copyright notice, list of conditions, and disclaimer. You may not use the names of contributors to endorse your derivative product without permission.',
                monetization: 'Fully permitted.',
                attribution: 'Required. Retain notices. The non-endorsement clause is a key part of this.',
                gplCompatibility: 'Yes.'
            }
        },
        {
            id: 'isc',
            name: 'ISC',
            fullName: 'ISC License',
            type: 'Permissive',
            color: 'bg-green-100 text-green-800',
            summary: 'A simplified BSD-2-Clause or MIT license. Highly permissive and popular.',
            allowsProprietary: true,
            hasPatentGrant: false,
            copyleft: 'none',
            permissivenessScore: 9,
            details: {
                permissions: 'You can use, copy, modify, and distribute the software for commercial and private purposes.',
                conditions: 'The copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
                monetization: 'Fully permitted.',
                attribution: 'Required. Fulfilled by including the copyright and license notice.',
                gplCompatibility: 'Yes, it is considered compatible with the GPL.'
            }
        },
        {
            id: 'cddl',
            name: 'CDDL 1.1',
            fullName: 'Common Development and Distribution License 1.1',
            type: 'Weak Copyleft',
            color: 'bg-orange-100 text-orange-800',
            summary: 'File-level copyleft. Modified CDDL files must stay CDDL, but can be combined with proprietary code.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'weak',
            permissivenessScore: 5,
            details: {
                permissions: 'Broad rights to use, reproduce, modify, and distribute.',
                conditions: 'Files licensed under CDDL must remain under CDDL. You can combine them with proprietary files, and the resulting binary can be sold under a different license, as long as the CDDL source is available.',
                monetization: 'Permitted. You can sell combined works and charge for support/warranty.',
                attribution: 'Required. Identify contributors and retain notices.',
                gplCompatibility: 'No, the FSF considers it incompatible with the GPL.'
            }
        },
        {
            id: 'epl2',
            name: 'EPL 2.0',
            fullName: 'Eclipse Public License 2.0',
            type: 'Weak Copyleft',
            color: 'bg-orange-100 text-orange-800',
            summary: 'Weak copyleft for modular projects. Has a secondary license option for GPL compatibility.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'weak',
            permissivenessScore: 6,
            details: {
                permissions: 'Broad rights to use, modify, copy, and distribute.',
                conditions: 'Distributed modifications must be licensed under EPL. However, you can integrate EPL code with non-EPL modules without the "viral" effect on those modules.',
                monetization: 'Permitted, designed to balance openness with commercial flexibility.',
                attribution: 'Required. Identify contributors and retain notices.',
                gplCompatibility: 'Yes, via a specific "Secondary License" clause that allows relicensing under GPL.'
            }
        },
        {
            id: 'mpl2',
            name: 'MPL 2.0',
            fullName: 'Mozilla Public License 2.0',
            type: 'Weak Copyleft',
            color: 'bg-orange-100 text-orange-800',
            summary: 'File-level copyleft. A good middle-ground between permissive and strong copyleft.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'weak',
            permissivenessScore: 5.5,
            details: {
                permissions: 'Broad rights to use, reproduce, modify, and distribute.',
                conditions: 'Modifications to MPL-licensed files must be shared under MPL. New, separate files in the same project can have different licenses.',
                monetization: 'Permitted. Allows combination with proprietary code.',
                attribution: 'Required. Retain notices, license text, and contributor list.',
                gplCompatibility: 'Yes, but the combined work becomes subject to GPL terms.'
            }
        },
        {
            id: 'lgpl3',
            name: 'LGPLv3',
            fullName: 'GNU Lesser General Public License v3.0',
            type: 'Weak Copyleft',
            color: 'bg-orange-100 text-orange-800',
            summary: 'Designed for libraries. Allows proprietary apps to link to the library without becoming open source.',
            allowsProprietary: true,
            hasPatentGrant: true,
            copyleft: 'weak',
            permissivenessScore: 4,
            details: {
                permissions: 'Allows linking with an LGPL component from a larger, proprietary program.',
                conditions: 'Users must be able to link the application with a newer version of the LGPL library. This is usually achieved via dynamic linking.',
                monetization: 'Permitted for the larger proprietary product that uses the library.',
                attribution: 'Required. Retain license notices.',
                gplCompatibility: 'Yes, designed to work with the GPL ecosystem.'
            }
        },
        {
            id: 'agpl3',
            name: 'AGPLv3',
            fullName: 'GNU Affero General Public License v3.0',
            type: 'Strong Copyleft',
            color: 'bg-red-100 text-red-800',
            summary: 'GPLv3 plus a clause to close the "ASP loophole" for network services.',
            allowsProprietary: false,
            hasPatentGrant: true,
            copyleft: 'strong',
            permissivenessScore: 1,
            details: {
                permissions: 'Same as GPLv3: copy, modify, distribute for commercial/private use.',
                conditions: 'If you run a modified version on a network server, you must offer the source code to all remote users. All other GPLv3 conditions apply.',
                monetization: 'Same as GPLv3: can charge for copies/support, not the license.',
                attribution: 'Required. Same as GPLv3.',
                gplCompatibility: 'Yes, mutually compatible with GPLv3.'
            }
        },
        {
            id: 'unlicense',
            name: 'The Unlicense',
            fullName: 'The Unlicense',
            type: 'Public Domain',
            color: 'bg-sky-100 text-sky-800',
            summary: 'A template for dedicating software to the public domain. Maximum freedom.',
            allowsProprietary: true,
            hasPatentGrant: false,
            copyleft: 'none',
            permissivenessScore: 10,
            details: {
                permissions: 'Anyone is free to copy, modify, publish, use, compile, sell, or distribute the software for any purpose.',
                conditions: 'None. Aims to waive all copyright.',
                monetization: 'Fully permitted.',
                attribution: 'Not required.',
                gplCompatibility: 'Yes, public domain code can be integrated anywhere.'
            }
        },
        {
            id: 'cc0',
            name: 'CC0 1.0',
            fullName: 'Creative Commons Zero v1.0 Universal',
            type: 'Public Domain',
            color: 'bg-sky-100 text-sky-800',
            summary: 'A public domain dedication tool. Waives all copyright and related rights.',
            allowsProprietary: true,
            hasPatentGrant: false,
            copyleft: 'none',
            permissivenessScore: 10,
            details: {
                permissions: 'Build upon, modify, incorporate, reuse, and redistribute as freely as possible for any purpose.',
                conditions: 'None. Aims to waive all copyright. Note: Does not waive patent or trademark rights.',
                monetization: 'Fully permitted.',
                attribution: 'Not legally required.',
                gplCompatibility: 'Yes, considered GPL-compatible for software.'
            }
        }
    ];
    
    const licenseGrid = document.getElementById('license-grid');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const filterContainer = document.getElementById('filter-container');
    const noResults = document.getElementById('no-results');
    const resetButton = document.getElementById('reset-filters');

    function renderLicenseCards(licenses) {
        licenseGrid.innerHTML = '';
        if (licenses.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');

        licenses.forEach(license => {
            const card = document.createElement('div');
            card.className = `license-card bg-white rounded-lg shadow p-5 flex flex-col`;
            card.dataset.id = license.id;
            card.innerHTML = `
                <div class="flex-grow">
                    <div class="flex justify-between items-start">
                        <h4 class="text-xl font-bold text-gray-900">${license.name}</h4>
                        <span class="text-xs font-semibold px-2 py-1 rounded-full ${license.color}">${license.type}</span>
                    </div>
                    <p class="text-gray-600 mt-2 text-sm">${license.summary}</p>
                    <div class="mt-4 space-y-2 text-sm">
                        <div class="flex items-center">
                            <span class="mr-2">${license.allowsProprietary ? '✅' : '❌'}</span>
                            <span>Allows proprietary derivatives</span>
                        </div>
                        <div class="flex items-center">
                            <span class="mr-2">${license.hasPatentGrant ? '✅' : '❌'}</span>
                            <span>Explicit patent grant</span>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <button data-id="${license.id}" class="view-details w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition">View Details</button>
                </div>
            `;
            licenseGrid.appendChild(card);
        });
    }

    function openModal(licenseId) {
        const license = licenseData.find(l => l.id === licenseId);
        if (!license) return;

        modalTitle.textContent = license.fullName;
        modalBody.innerHTML = `
            <div class="space-y-4">
                <div>
                    <h5 class="font-semibold text-gray-800">Permissions</h5>
                    <p class="text-gray-600">${license.details.permissions}</p>
                </div>
                <div>
                    <h5 class="font-semibold text-gray-800">Conditions & Obligations</h5>
                    <p class="text-gray-600">${license.details.conditions}</p>
                </div>
                <div>
                    <h5 class="font-semibold text-gray-800">Monetization</h5>
                    <p class="text-gray-600">${license.details.monetization}</p>
                </div>
                <div>
                    <h5 class="font-semibold text-gray-800">Attribution</h5>
                    <p class="text-gray-600">${license.details.attribution}</p>
                </div>
                <div>
                    <h5 class="font-semibold text-gray-800">GPL Compatibility</h5>
                    <p class="text-gray-600">${license.details.gplCompatibility}</p>
                </div>
            </div>
        `;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function applyFilters() {
        const proprietaryFilter = document.getElementById('filter-proprietary').checked;
        const patentFilter = document.getElementById('filter-patent').checked;
        
        const copyleftFilters = Array.from(document.querySelectorAll('.copyleft-filter:checked')).map(el => el.value.split('-')[1]);

        let filteredLicenses = licenseData.filter(license => {
            const proprietaryMatch = !proprietaryFilter || license.allowsProprietary;
            const patentMatch = !patentFilter || license.hasPatentGrant;
            const copyleftMatch = copyleftFilters.length === 0 || copyleftFilters.includes(license.copyleft);
            
            return proprietaryMatch && patentMatch && copyleftMatch;
        });

        renderLicenseCards(filteredLicenses);
    }

    filterContainer.addEventListener('change', applyFilters);
    
    resetButton.addEventListener('click', () => {
        const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        applyFilters();
    });

    licenseGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            openModal(e.target.dataset.id);
        }
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    const sortedLicensesForChart = [...licenseData].sort((a, b) => a.permissivenessScore - b.permissivenessScore);
    const chartCtx = document.getElementById('permissivenessChart').getContext('2d');
    const permissivenessChart = new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: sortedLicensesForChart.map(l => l.name),
            datasets: [{
                label: 'Permissiveness Score (Higher is more permissive)',
                data: sortedLicensesForChart.map(l => l.permissivenessScore),
                backgroundColor: sortedLicensesForChart.map(l => {
                    if (l.type === 'Strong Copyleft') return 'rgba(239, 68, 68, 0.6)';
                    if (l.type === 'Weak Copyleft') return 'rgba(249, 115, 22, 0.6)';
                    if (l.type === 'Public Domain') return 'rgba(14, 165, 233, 0.6)';
                    return 'rgba(13, 148, 136, 0.6)';
                }),
                borderColor: sortedLicensesForChart.map(l => {
                    if (l.type === 'Strong Copyleft') return 'rgba(239, 68, 68, 1)';
                    if (l.type === 'Weak Copyleft') return 'rgba(249, 115, 22, 1)';
                    if (l.type === 'Public Domain') return 'rgba(14, 165, 233, 1)';
                    return 'rgba(13, 148, 136, 1)';
                }),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 10,
                    title: { display: true, text: 'Permissiveness Score' }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x;
                            }
                            return label;
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const chartElement = elements[0];
                    const licenseName = permissivenessChart.data.labels[chartElement.index];
                    const license = licenseData.find(l => l.name === licenseName);
                    if (license) {
                        const card = document.querySelector(`.license-card[data-id="${license.id}"]`);
                        if (card) {
                            document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
                            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            card.classList.add('highlight');
                            setTimeout(() => card.classList.remove('highlight'), 2000);
                        }
                    }
                }
            }
        }
    });
    
    const accordionContainer = document.getElementById('accordion-container');
    const licenseGroups = [
        { name: 'Permissive (Minimal Conditions)', description: 'These licenses prioritize maximal freedom with very few obligations, typically just notice retention. They are ideal for projects aiming for the widest possible adoption, including in proprietary software.', ids: ['mit', 'bsd3', 'isc', 'unlicense', 'cc0'] },
        { name: 'Permissive (with Patent Grants)', description: 'These offer broad freedoms like other permissive licenses but include explicit patent grants and retaliation clauses, providing enhanced legal security for commercial and corporate use.', ids: ['apache2', 'mspl'] },
        { name: 'Weak Copyleft (File/Library Level)', description: 'A balance between open-source principles and commercial flexibility. They require modifications to the licensed code to be shared, but allow linking with or inclusion in larger proprietary works.', ids: ['mpl2', 'cddl', 'epl2', 'lgpl3'] },
        { name: 'Strong Copyleft', description: 'These "viral" licenses ensure that all distributed derivative works also remain open source, maximizing end-user freedom. They are best for projects that want to guarantee all future versions remain free.', ids: ['gpl3', 'agpl3'] }
    ];

    licenseGroups.forEach((group, index) => {
        const groupEl = document.createElement('div');
        groupEl.className = 'border border-gray-200 rounded-lg bg-white';
        const licensesInGroup = group.ids.map(id => {
            const license = licenseData.find(l => l.id === id);
            return license ? license.name : null;
        }).filter(name => name).join(', ');
        groupEl.innerHTML = `
            <button class="accordion-header w-full flex justify-between items-center p-4 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50">
                <span>${group.name}</span>
                <svg class="accordion-icon w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="accordion-content hidden p-4 border-t border-gray-200">
                <p class="text-gray-600 mb-3">${group.description}</p>
                <p class="text-sm font-medium text-gray-800">Includes: <span class="font-normal text-teal-700">${licensesInGroup}</span></p>
            </div>
        `;
        accordionContainer.appendChild(groupEl);
    });

    accordionContainer.addEventListener('click', (e) => {
        const header = e.target.closest('.accordion-header');
        if (header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }
    });

    renderLicenseCards(licenseData);
});