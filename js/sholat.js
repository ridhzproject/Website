// js/sholat.js

class PrayerAPI {
    static async searchCity(cityName) {
        try {
            const response = await fetch(`https://api.myquran.com/v2/sholat/kota/cari/${cityName}`);
            const result = await response.json();
            return result.status ? result.data : [];
        } catch (error) {
            console.error("API Error:", error);
            return [];
        }
    }

    static async getSchedule(cityId) {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        
        try {
            const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${cityId}/${y}/${m}/${d}`);
            const result = await response.json();
            return result.status ? result.data.jadwal : null;
        } catch (error) {
            console.error("API Error:", error);
            return null;
        }
    }
}
