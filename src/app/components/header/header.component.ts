import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { Company } from '../../../assets/data/companydata/company.model';
import { CompanyService } from '../../../assets/data/companydata/company.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, DesktopHeaderComponent, MobileHeaderComponent]
})
export class HeaderComponent implements OnInit {
    isMobile = false;
    searchText = '';
    company!: Company;
    isBrowser: boolean;

    constructor(
        private companyService: CompanyService,
        private toastr: ToastrService,
        private router: Router,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = window.innerWidth < 992;
        }
    }

    ngOnInit() {
        this.companyService.getCompanies().subscribe((data) => {
            if (data && data.length > 0) {
                this.company = data[0];
            }
        });
    }

    @HostListener('window:resize')
    onResize() {
        if (this.isBrowser) {
            this.isMobile = window.innerWidth < 992;
        }
    }

    logout() {
        sessionStorage.removeItem('isLoggedIn');
        this.toastr.success('Logged out successfully!');
        this.router.navigate(['/pages/login']);
    }

    handleSearchSubmit() {
        if (!this.searchText) return;
        this.router.navigate(['/pages/search'], {
            queryParams: { searchText: this.searchText }
        });
    }
}
