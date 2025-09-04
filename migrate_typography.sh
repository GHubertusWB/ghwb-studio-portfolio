#!/bin/bash

# Migration Script: Von Custom Utilities zu Standard Tailwind

# Verzeichnis definieren
PROJECT_DIR="/Users/hubertus.weidenbruecher/Projekte/GHWB Studio/portfolio-website"

# Funktion zum Ersetzen in allen TSX Dateien
migrate_typography() {
    echo "🔄 Migriere Typography-Klassen..."
    
    # Headings
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h1/text-h1 text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h2/text-h2 text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h3/text-h3 text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h4/text-h4 text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h5/text-h5 text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/heading-h6/text-h6 text-primary/g' {} \;
    
    # Body Text
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-body-large/text-body-xl text-secondary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-copy-large/text-body-xl text-secondary text-max-width/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-body/text-body text-secondary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-copy/text-body text-secondary text-max-width/g' {} \;
    
    # Labels & Utils
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-label/text-label text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-label-small/text-xs font-medium text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-hint/text-hint text-secondary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-caption/text-caption text-secondary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-meta/text-meta text-secondary/g' {} \;
    
    # Links
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-link/text-primary hover:text-secondary transition-colors underline underline-offset-2/g' {} \;
    
    echo "✅ Typography Migration abgeschlossen"
}

# Funktion zur Bereinigung von doppelten Klassen
cleanup_duplicates() {
    echo "🧹 Bereinige doppelte Klassen..."
    
    # Entferne doppelte text-primary/text-secondary Klassen
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-primary text-primary/text-primary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-secondary text-secondary/text-secondary/g' {} \;
    find "$PROJECT_DIR/src" -name "*.tsx" -exec sed -i '' 's/text-body text-secondary text-secondary/text-body text-secondary/g' {} \;
    
    echo "✅ Bereinigung abgeschlossen"
}

# Migration starten
echo "🚀 Starte Typography Migration..."
migrate_typography
cleanup_duplicates
echo "🎉 Migration erfolgreich abgeschlossen!"
