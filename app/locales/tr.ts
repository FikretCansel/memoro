export default {
  onboarding: {
    languageSelection: 'Dil Seçimi',
    learningLanguage: 'Öğrenmek İstediğiniz Dil',
    nativeLanguage: 'Ana Diliniz',
    continue: 'Devam Et',
    welcome: 'Hoş Geldiniz',
    welcomeDescription: 'Memoro ile İngilizce kelime öğrenmeye hazır mısınız?',
    selectLevel: 'Seviyenizi Seçin',
    selectLevelDescription: 'A1\'den C2\'ye kadar istediğiniz seviyede kelimeler öğrenin.',
    visualize: 'Görselleştirin',
    visualizeDescription: 'Kelimeleri görsellerle birleştirerek daha kalıcı öğrenin.',
    dictionary: 'Sözlük',
    dictionaryDescription: 'İstediğiniz kelimeleri seçip kendi öğrenme setinizi oluşturun.',
    trackProgress: 'İlerleyişinizi Takip Edin',
    trackProgressDescription: 'Öğrendiğiniz kelimeleri kaydedin ve gelişiminizi görün.',
    skip: 'Atla',
    next: 'İleri',
    start: 'Başla'
  },
  languages: {
    tr: 'Türkçe',
    pt: 'Portekizce',
    es: 'İspanyolca',
    en: 'İngilizce'
  },
  notifications: {
    dailyReminderTitle: 'Günlük Kelime Zamanı! 📚',
    dailyReminderBody: 'Bugün yeni kelimeler öğrenmeye ne dersin?',
    dailyWordReminder: 'Günlük Kelime Hatırlatması 📚',
    dailyWordReminderBody: 'Bugünkü kelimelerinizi öğrenmeye ne dersiniz?'
  },
  stats: {
    title: 'İstatistikler',
    totalWords: 'Toplam {0} kelime öğrenildi',
    levels: {
      all: 'Tümü',
      allDescription: 'Tüm Kelimeler',
      beginner: 'Beginner',
      elementary: 'Elementary',
      preIntermediate: 'Pre-Intermediate',
      upperIntermediate: 'Upper Intermediate',
      advanced: 'Advanced',
      proficiency: 'Proficiency',
      examPrep: 'Sınav Hazırlık',
      dictionary: 'Sözlükten Seçilenler'
    },
    noWords: {
      allLevels: 'Henüz öğrenilen kelime yok',
      specificLevel: 'Bu seviyede henüz öğrenilen kelime yok',
      subtext: 'Yeni kelimeler öğrendikçe burada listelenecek'
    },
    reinforcement: {
      info: 'Öğrendiğiniz kelimeleri pekiştirmek için 3-6 arası kelime seçebilirsiniz. Seçtiğiniz kelimelerle görsel eşleştirme yaparak tekrar çalışabilirsiniz.',
      button: '{0} Kelimeyi Pekiştir'
    }
  },
  languageSelector: {
    title: 'Dil Seçimi',
    description: 'Öğrenme deneyiminizi kişiselleştirmek için ana dilinizi seçin. Kelimelerin anlamları ve açıklamaları seçtiğiniz dilde gösterilecektir.',
    nativeLanguage: 'Ana Diliniz',
    learningLanguage: 'Öğreneceğiniz Dil',
    note: 'Şu an için sadece İngilizce öğrenme seçeneği mevcuttur. Yakında yeni diller eklenecektir.',
    info: 'Dil seçiminizi istediğiniz zaman değiştirebilirsiniz. Değişiklik yaptığınızda, kelime listeleri yeni seçtiğiniz dile göre güncellenecektir.'
  },
  wordList: {
    title: 'Seçilen {0} Kelime',
    subtitle: 'Bu kelimeleri öğrenmeye hazır mısınız?',
    loading: 'Kelimeler yükleniyor...',
    wordDetail: {
      meaning: 'Anlam:',
      example: 'Örnek Cümle:'
    },
    buttons: {
      regenerate: 'Yeniden Üret',
      continue: 'Devam Et'
    }
  },
  home: {
    title: 'Memoro',
    subtitle: 'İngilizce Kelime Öğrenme Asistanı',
    learnWords: 'Kelime Öğren',
    statistics: 'İstatistikler',
    settings: 'Ayarlar'
  },
  levelSelection: {
    title: 'Seviye Seçin',
    subtitle: 'Öğrenmek istediğiniz seviyeyi seçin',
    loading: 'Yükleniyor...',
    levels: {
      A1: 'Başlangıç',
      A2: 'Temel',
      B1: 'Orta Öncesi',
      B2: 'Orta Üstü',
      C1: 'İleri',
      C2: 'Üst',
      YDS: 'Sınav'
    },
    tabs: {
      home: 'Ana Sayfa',
      dictionary: 'Sözlük',
      stats: 'İstatistik',
      settings: 'Ayarlar'
    }
  },
  wordCount: {
    title: 'Günlük Hedef',
    subtitle: 'Her gün kaç kelime öğrenmek istiyorsunuz?',
    wordText: '{0} Kelime',
    levelText: '{0} Seviye',
    levels: {
      3: 'Başlangıç',
      4: 'Orta',
      5: 'İyi',
      6: 'İleri'
    }
  },
  imageSelection: {
    title: 'Arka Plan Seçin',
    subtitle: 'Kelimeleriniz için güzel bir arka plan seçin',
    loading: 'Resimler yükleniyor...'
  },
  dictionaryScreen: {
    title: 'Sözlük',
    wordCount: 'Kaç kelime öğrenmek istiyorsunuz?',
    infoText: 'Listeden veya arama yaparak {0} kelime seçin. Seçtiğiniz kelimelerle bir arka plan görseli seçerek kelimeleri görsel üzerine yerleştirebilir ve öğrenme deneyiminizi kişiselleştirebilirsiniz.',
    searchPlaceholder: 'İngilizce kelime veya Türkçe anlamını ara...',
    examplePrefix: 'Örnek:',
    continueButton: 'Devam Et ({0}/{1})'
  },
  settings: {
    title: 'Ayarlar',
    themeSelection: 'Tema Seçimi',
    themeDescription: 'Uygulama görünümünü özelleştirin',
    themes: {
      light: {
        label: 'Açık Tema',
        description: 'Beyaz arka plan ve koyu renkli metinler'
      },
      dark: {
        label: 'Koyu Tema',
        description: 'Koyu arka plan ve açık renkli metinler'
      },
      pastel: {
        label: 'Pastel Tema',
        description: 'Yumuşak ve rahatlatıcı renkler'
      }
    },
    notifications: 'Bildirimler',
    notificationTime: 'Hatırlatmalar her gün sabah 10:00\'da gönderilecektir.',
    offlineMode: 'Çevrimdışı Kullanım',
    offlineModeDescription: 'Çevrimdışı mod, internet bağlantınız olmadığında bile kelime listelerine erişmenizi sağlar. Bunun için önce verileri indirmeniz gerekir.',
    lastUpdated: 'Son güncelleme:',
    downloadingData: 'Veriler indiriliyor...',
    downloadAll: 'Tüm Verileri İndir',
    updateData: 'Verileri Güncelle'
  },
  wordOverlay: {
    preview: 'Önizleme',
    styleSection: 'Yazı Biçimi',
    positionSection: 'Kelime Konumu',
    fontSize: 'Yazı Boyutu',
    xPosition: 'X Konumu',
    yPosition: 'Y Konumu',
    wordFormat: 'Kelime Formatı',
    layoutPosition: 'Yerleşim Konumu',
    layoutPositions: {
      top: 'Üst',
      middle: 'Orta',
      bottom: 'Alt'
    },
    formatTypes: {
      standard: 'Standart',
      inline: 'Satır İçi',
      compact: 'Kompakt',
      flashcard: 'Flashcard',
      dictionary: 'Sözlük',
      quiz: 'Quiz',
      poetic: 'Şiirsel',
      bubble: 'Baloncuk',
      memo: 'Memo',
      modern: 'Modern'
    },
    saveButton: 'Kaydet',
    saveSuccess: 'Başarıyla kaydedildi!',
    saveError: 'Kaydetme başarısız oldu!',
    savePermissionError: 'Kaydetmek için izin gerekli!',
    saveWarning: 'Görüntü galeriye kaydedilecek. Devam etmek istiyor musunuz?',
    saveConfirm: 'Evet, Kaydet',
    saveCancel: 'İptal',
    wordsSaved: 'Harika! Tüm kelimeler öğrenildi olarak işaretlendi.',
    congratulations: 'Tebrikler!',
    complete: 'Tamamlandı!',
    continueButton: 'Devam Et',
    closeButton: 'Kapat',
    restartButton: 'Yeniden Başla'
  }
}; 